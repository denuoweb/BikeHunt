// event_interaction.js

function resetModalContent() {
    const modalTaskActions = document.getElementById('modalTaskActions');
    if (modalTaskActions) {
        modalTaskActions.innerHTML = '';
    }
    document.querySelectorAll('[id^="verifyButton-"]').forEach(button => {
        button.remove();  // Remove dynamically added buttons
    });
    document.querySelectorAll('[id^="verifyTaskForm-"]').forEach(form => {
        form.remove();  // Remove dynamically added forms
    });
}

function showModal(tips) {
    const modalText = document.getElementById("modal-text");
    if (modalText) {
        modalText.textContent = tips;
    }
    const modal = document.getElementById("modal");
    if (modal) {
        modal.style.display = 'block';
    }
}

function closeTaskDetailModal() {
    document.getElementById('taskDetailModal').style.display = 'none';
}

function closeSubmissionModal() {
    document.getElementById('submissionDetailModal').style.display = 'none';
    document.getElementById('taskDetailModal').style.backgroundColor = 'rgba(0,0,0,0.4)';
}

// Assuming other utility functions might be needed here