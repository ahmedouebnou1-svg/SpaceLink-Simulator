const msgRange = document.getElementById('msgRange');
const msgCountVal = document.getElementById('msgCountVal');
const runBtn = document.getElementById('runBtn');
const eventLog = document.getElementById('eventLog');

msgRange.addEventListener('input', (e) => {
    msgCountVal.innerText = e.target.value;
});

runBtn.addEventListener('click', () => {
    const totalMessages = parseInt(msgRange.value);
    eventLog.innerHTML = ''; // Clear previous logs

    // Base propagation delay calculation (simulating Earth-Mars distance)
    const basePropagationDelay = 12.5; 

    // Direct Only strategy (affected by contact gaps)
    const directDelivered = Math.floor(totalMessages * 0.35); 
    const directDelay = (basePropagationDelay + (Math.random() * 2)).toFixed(1);

    // Store & Forward strategy (full delivery with buffering delay)
    const dtnDelivered = totalMessages; 
    const dtnDelay = (basePropagationDelay + 4.5 + (Math.random() * 2)).toFixed(1);

    // Update UI results
    document.getElementById('directDelivered').innerText = `${directDelivered} / ${totalMessages}`;
    document.getElementById('directDelay').innerText = directDelay;

    document.getElementById('dtnDelivered').innerText = `${dtnDelivered} / ${totalMessages}`;
    document.getElementById('dtnDelay').innerText = dtnDelay;

    // Generate discrete-event simulation logs
    let logs = [
        `[T+00m] Simulation Started: Generated ${totalMessages} messages from Earth station.`,
        `[T+05m] Direct Link Available: Initiating first batch transmission.`,
        `[T+30m] WARNING: Contact Gap encountered between Earth and Mars nodes.`,
        `[T+35m] Direct Only: Failed to deliver (${totalMessages - directDelivered}) messages due to missing contact window.`,
        `[T+45m] Store & Forward Strategy: Relay node successfully buffered remaining messages.`,
        `[T+60m] New Contact Window established with Mars destination.`,
        `[T+75m] Store & Forward Strategy: Forwarded and delivered all remaining messages with 100% success rate.`,
        `[T+100m] Mission completed. Performance metrics calculated successfully.`
    ];

    logs.forEach(log => {
        const p = document.createElement('p');
        p.style.margin = "4px 0";
        p.innerText = log;
        eventLog.appendChild(p);
    });
});
