document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    const fullNameInput = document.getElementById("full-name");
    const emailInput = document.getElementById("email");
    const orderNoInput = document.getElementById("order-no");
    const productCodeInput = document.getElementById("product-code");
    const quantityInput = document.getElementById("quantity");
    const complaintsGroup = document.getElementById("complaints-group");
    const otherComplaintCheckbox = document.getElementById("other-complaint");
    const complaintDescription = document.getElementById("complaint-description");
    const solutionsGroup = document.getElementById("solutions-group");
    const otherSolutionRadio = document.getElementById("other-solution");
    const solutionDescription = document.getElementById("solution-description");

    // Regular Expressions for validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const orderNoRegex = /^2024\d{6}$/;
    const productCodeRegex = /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/;

    function updateBorder(element, isValid) {
        element.style.borderColor = isValid ? "green" : "red";
    }

    window.validateForm = function() {
        const results = {};

        results["full-name"] = fullNameInput.value.trim() !== "";

        results["email"] = emailRegex.test(emailInput.value.trim());

        results["order-no"] = orderNoRegex.test(orderNoInput.value.trim());

        results["product-code"] = productCodeRegex.test(productCodeInput.value.trim());

        const quantityVal = parseInt(quantityInput.value.trim(), 10);
        results["quantity"] = !isNaN(quantityVal) && Number.isInteger(quantityVal) && quantityVal > 0;

        const checkedComplaints = complaintsGroup.querySelectorAll('input[name="complaint"]:checked');
        results["complaints-group"] = checkedComplaints.length > 0;

        if (otherComplaintCheckbox.checked) {
            results["complaint-description"] = complaintDescription.value.trim().length >= 20;
        } else {
            results["complaint-description"] = true; 
        }

        const selectedSolution = solutionsGroup.querySelector('input[name="solutions"]:checked');
        results["solutions-group"] = selectedSolution !== null;

        if (otherSolutionRadio.checked) {
            results["solution-description"] = solutionDescription.value.trim().length >= 20;
        } else {
            results["solution-description"] = true; 
        }

        return results;
    };

    window.isValid = function(validationObject) {
        return Object.values(validationObject).every(status => status === true);
    };


    fullNameInput.addEventListener("change", () => {
        const isValidField = fullNameInput.value.trim() !== "";
        updateBorder(fullNameInput, isValidField);
    });

    emailInput.addEventListener("change", () => {
        const isValidField = emailRegex.test(emailInput.value.trim());
        updateBorder(emailInput, isValidField);
    });

    orderNoInput.addEventListener("change", () => {
        const isValidField = orderNoRegex.test(orderNoInput.value.trim());
        updateBorder(orderNoInput, isValidField);
    });

    productCodeInput.addEventListener("change", () => {
        const isValidField = productCodeRegex.test(productCodeInput.value.trim());
        updateBorder(productCodeInput, isValidField);
    });

    quantityInput.addEventListener("change", () => {
        const quantityVal = parseInt(quantityInput.value.trim(), 10);
        const isValidField = !isNaN(quantityVal) && Number.isInteger(quantityVal) && quantityVal > 0;
        updateBorder(quantityInput, isValidField);
    });

    complaintsGroup.addEventListener("change", () => {
        const checkedComplaints = complaintsGroup.querySelectorAll('input[name="complaint"]:checked');
        const isValidField = checkedComplaints.length > 0;
        updateBorder(complaintsGroup, isValidField);
        
        if (otherComplaintCheckbox.checked) {
            const isDescValid = complaintDescription.value.trim().length >= 20;
            updateBorder(complaintDescription, isDescValid);
        } else {
            complaintDescription.style.borderColor = "rgb(118, 118, 118)";
        }
    });

    complaintDescription.addEventListener("change", () => {
        if (otherComplaintCheckbox.checked) {
            const isValidField = complaintDescription.value.trim().length >= 20;
            updateBorder(complaintDescription, isValidField);
        }
    });

    solutionsGroup.addEventListener("change", () => {
        const selectedSolution = solutionsGroup.querySelector('input[name="solutions"]:checked');
        const isValidField = selectedSolution !== null;
        updateBorder(solutionsGroup, isValidField);

        if (otherSolutionRadio.checked) {
            const isDescValid = solutionDescription.value.trim().length >= 20;
            updateBorder(solutionDescription, isDescValid);
        } else {
            solutionDescription.style.borderColor = "rgb(118, 118, 118)";
        }
    });

    solutionDescription.addEventListener("change", () => {
        if (otherSolutionRadio.checked) {
            const isValidField = solutionDescription.value.trim().length >= 20;
            updateBorder(solutionDescription, isValidField);
        }
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const validationResults = window.validateForm();
        const formIsValid = window.isValid(validationResults);

        updateBorder(fullNameInput, validationResults["full-name"]);
        updateBorder(emailInput, validationResults["email"]);
        updateBorder(orderNoInput, validationResults["order-no"]);
        updateBorder(productCodeInput, validationResults["product-code"]);
        updateBorder(quantityInput, validationResults["quantity"]);
        updateBorder(complaintsGroup, validationResults["complaints-group"]);
        updateBorder(solutionsGroup, validationResults["solutions-group"]);

        if (otherComplaintCheckbox.checked) {
            updateBorder(complaintDescription, validationResults["complaint-description"]);
        } else {
            complaintDescription.style.borderColor = "rgb(118, 118, 118)";
        }

        if (otherSolutionRadio.checked) {
            updateBorder(solutionDescription, validationResults["solution-description"]);
        } else {
            solutionDescription.style.borderColor = "rgb(118, 118, 118)";
        }

        const messageBox = document.getElementById("message-box");
        if (formIsValid) {
            messageBox.style.color = "green";
            messageBox.textContent = "Form submitted successfully!";
        } else {
            messageBox.style.color = "red";
            messageBox.textContent = "Please correct the errors in red before submitting.";
        }
    });
});