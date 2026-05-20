const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];
// 1. Flatten playlists and record their original positional source indices
function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) return [];

  const flatTracks = [];
  
  for (let playlistIndex = 0; playlistIndex < playlists.length; playlistIndex++) {
    const currentPlaylist = playlists[playlistIndex];
    
    // Safety check in case elements inside aren't arrays
    if (Array.isArray(currentPlaylist)) {
      for (let trackIndex = 0; trackIndex < currentPlaylist.length; trackIndex++) {
        const track = currentPlaylist[trackIndex];
        
        flatTracks.push({
          ...track,
          source: [playlistIndex, trackIndex]
        });
      }
    }
  }
  
  return flatTracks;
}

// 2. Score tracks using the given formula based on votes and BPM proximity to 120
function scoreTracks(tracks) {
  if (!Array.isArray(tracks)) return [];

  return tracks.map(track => {
    const score = track.votes * 10 - Math.abs(track.bpm - 120);
    return {
      ...track,
      score: score
    };
  });
}

// 3. Deduplicate tracks by trackId, keeping only the first occurrence
function dedupeTracks(tracks) {
  if (!Array.isArray(tracks)) return [];

  const seenIds = new Set();
  const uniqueTracks = [];

  for (const track of tracks) {
    if (!seenIds.has(track.trackId)) {
      seenIds.add(track.trackId);
      uniqueTracks.push(track);
    }
  }

  return uniqueTracks;
}

// 4. Enforce quota per artist, eliminating excessive tracks while keeping earliest entries
function enforceArtistQuota(tracks, maxPerArtist) {
  if (!Array.isArray(tracks)) return [];

  const artistCounts = new Map();
  const filteredTracks = [];

  for (const track of tracks) {
    const artist = track.artist;
    const currentCount = artistCounts.get(artist) || 0;

    if (currentCount < maxPerArtist) {
      artistCounts.set(artist, currentCount + 1);
      filteredTracks.push(track);
    }
  }

  return filteredTracks;
}

// 5. Transform tracks into sequential 1-indexed time slots
function buildSchedule(tracks) {
  if (!Array.isArray(tracks)) return [];

  return tracks.map((track, index) => {
    return {
      slot: index + 1,
      trackId: track.trackId
    };
  });
}

// 6. Master function linking the processing pipeline stages in sequence
function remixPlaylist(playlists, maxPerArtist) {
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const deduped = dedupeTracks(scored);
  const quotaEnforced = enforceArtistQuota(deduped, maxPerArtist);
  const finalSchedule = buildSchedule(quotaEnforced);

  return finalSchedule;
}