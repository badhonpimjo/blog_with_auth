document.addEventListener('DOMContentLoaded', () => {
    // 1. Display deployment timestamp
    const timestampEl = document.getElementById('timestamp');
    const now = new Date();
    timestampEl.textContent = `Deployed at: ${now.toLocaleString(undefined, { 
        year: 'numeric', month: 'short', day: 'numeric', 
        hour: '2-digit', minute: '2-digit' 
    })}`;

    // 2. Create a temporary feedback element
    const feedback = document.createElement('p');
    feedback.id = 'feedback';
    feedback.style.cssText = `
        margin-top: 1rem; font-size: 0.9rem; color: var(--primary, #28a745);
        font-weight: 500; opacity: 0; transition: opacity 0.3s ease;
    `;
    document.querySelector('.container').appendChild(feedback);

    const showFeedback = (msg) => {
        feedback.textContent = msg;
        feedback.style.opacity = '1';
        setTimeout(() => feedback.style.opacity = '0', 2500);
    };

    // 3. Button interactions
    document.getElementById('view-btn').addEventListener('click', () => {
        showFeedback('🌐 Redirecting to live environment...');
        // window.location.href = '/'; // Uncomment for actual redirect
    });

    document.getElementById('logs-btn').addEventListener('click', () => {
        showFeedback('📄 Logs loaded. Check browser console.');
        console.table({
            status: '✅ Success',
            environment: 'Production',
            version: 'v1.0.0',
            build_time: '12.4s',
            deployed_by: 'CI/CD Pipeline'
        });
    });

    // 4. Console welcome message
    console.log('%c Deployment Successful ', 'background: #28a745; color: #fff; padding: 4px 8px; border-radius: 4px; font-weight: bold;');
});
