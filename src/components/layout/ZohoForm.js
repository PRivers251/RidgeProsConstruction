// useEffect(() => {
//     // Load jQuery
//     const script = document.createElement("script");
//     script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js";
//     script.async = true;
//     document.body.appendChild(script);

//     // Zoho validation scripts and form submission logic
//     window.validateEmail6508265000000489227 = function () {
//       const form = document.forms["WebToLeads6508265000000489227"];
//       const emailFld = form.querySelectorAll("[ftype=email]");
//       for (let i = 0; i < emailFld.length; i++) {
//         const emailVal = emailFld[i].value;
//         if (emailVal.trim().length !== 0) {
//           const atpos = emailVal.indexOf("@");
//           const dotpos = emailVal.lastIndexOf(".");
//           if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
//             alert("Please enter a valid email address.");
//             emailFld[i].focus();
//             return false;
//           }
//         }
//       }
//       return true;
//     };

//     window.checkMandatory6508265000000489227 = function () {
//       const mndFields = ["First Name", "Last Name", "Email"];
//       const fldLangVal = ["First Name", "Last Name", "Email"];
//       for (let i = 0; i < mndFields.length; i++) {
//         const fieldObj = document.forms["WebToLeads6508265000000489227"][mndFields[i]];
//         if (fieldObj && fieldObj.value.trim().length === 0) {
//           alert(`${fldLangVal[i]} cannot be empty.`);
//           fieldObj.focus();
//           return false;
//         }
//       }
//       if (!validateEmail6508265000000489227()) return false;
//       document.querySelector(".crmWebToEntityForm .formsubmit").setAttribute("disabled", true);
//       return true;
//     };

//     // Handle form submission using AJAX with jQuery
//     $(document).ready(function () {
//       $("#webform6508265000000489227").submit(function (e) {
//         const isMandatory = window.checkMandatory6508265000000489227();
//         e.preventDefault();
//         if (isMandatory) {
//           const formData = new FormData(this);
//           $.ajax({
//             url: "https://crm.zoho.com/crm/WebToLeadForm",
//             type: "POST",
//             data: formData,
//             cache: false,
//             contentType: false,
//             processData: false,
//             success: function () {
//               alert("Form submitted successfully!");
//               document.getElementById("webform6508265000000489227").reset();
//               document.querySelector(".crmWebToEntityForm .formsubmit").removeAttribute("disabled");
//             },
//             error: function () {
//               alert("An error occurred.");
//             },
//           });
//         }
//       });
//     });

//     return () => {
//       document.body.removeChild(script); // Clean up
//     };
//   }, []);

