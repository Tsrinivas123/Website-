// JavaScript for Contact Links Interaction
document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.getElementById('email-link');
    const linkedinLink = document.getElementById('linkedin-link');

    // Email link interaction
    emailLink.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default action

        const email = "tusharshrivas7999@gmail.com";
        const confirmEmail = confirm('Are you sure you want to email me?');
        
        if (confirmEmail) {
            window.location.href = mailto:${email};
        }
    });

    // LinkedIn link interaction
    linkedinLink.addEventListener('click', function(event) {
        event.preventDefault();  // Prevent the default action

        const linkedinUrl = "https://www.linkedin.com/in/t%C3%BAsh%C3%A1r-shr%C3%ADv%C3%A1s-78727a310/";
        const confirmLinkedIn = confirm('Are you sure you want to visit my LinkedIn profile?');

        if (confirmLinkedIn) {
            window.open(linkedinUrl, '_blank');
        }
    });
});
