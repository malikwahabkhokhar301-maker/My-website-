document.addEventListener('DOMContentLoaded', function() {
    const marksForm = document.getElementById('marks-form');
    const imageForm = document.getElementById('image-form');
    const studentImage = document.getElementById('student-image');
    const imagePreview = document.getElementById('image-preview');
    const founderImageUpload = document.getElementById('founder-image-upload');

    // Marks form submission
    marksForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const studentId = document.getElementById('student-id').value;
        const studentName = document.getElementById('student-name').value;
        const studentClass = document.getElementById('class').value;
        const subject = document.getElementById('subject').value;
        const marks = document.getElementById('marks').value;
        
        if (studentId && studentName && studentClass && subject && marks) {
            alert(`Marks for ${studentName} (ID: ${studentId}) from class ${studentClass} in ${subject} uploaded successfully!`);
            marksForm.reset();
        }
    });

    // Image form submission
    imageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const studentId = document.getElementById('image-student-id').value;
        const studentImage = document.getElementById('student-image').files[0];
        
        if (studentId && studentImage) {
            alert(`Image for student ID ${studentId} uploaded successfully!`);
            imageForm.reset();
            imagePreview.style.display = 'none';
        }
    });

    // Founder image upload
    founderImageUpload.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            alert('Founder image uploaded successfully!');
            // In a real application, you would upload the image to a server here
        }
    });

    // Image preview functionality
    studentImage.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePreview.querySelector('img').src = e.target.result;
                imagePreview.style.display = 'block';
            }
            reader.readAsDataURL(file);
        }
    });

    // Update file upload button text
    const fileInputs = document.querySelectorAll('.file-upload-input');
    fileInputs.forEach(input => {
        input.addEventListener('change', function() {
            const button = this.previousElementSibling;
            if (this.files.length > 0) {
                button.innerHTML = `<i class="fas fa-file"></i> ${this.files[0].name}`;
            } else {
                button.innerHTML = `<i class="fas fa-file"></i> Choose File`;
            }
        });
    });
});
