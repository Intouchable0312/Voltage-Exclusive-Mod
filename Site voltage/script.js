// Fonction pour charger le contenu correspondant à la section choisie
function loadContent(page) {
    const contentDiv = document.getElementById('content');

    if (page === 'home') {
        contentDiv.innerHTML = `
            <div class="content">
                <div class="discord-invite">
                    <div class="invite-content">
                        <img src="https://volt-cdn.voltage.gay/TransparentIcon.png" alt="Voltage Logo">
                        <div class="invite-text">
                            <div>Welcome to Voltage!</div>
                        </div>
                    </div>
                    <button onclick="window.location.href='Voltage.exe';" download>Download Mod</button>
                </div>
            </div>
        `;
    } else if (page === 'plugins') {
        contentDiv.innerHTML = `
            <div class="content">
                <h1 style="font-size: 40px">Plugins Beta</h1>
                <h2 style="font-size: 30px; margin-right: 450px; margin-top: 50px;">Redeem Code</h2>
                <pre style="white-space: pre; font-family: monospace; font-size: 20px; background: #f0f0f000; padding: 10px; border-radius: 5px;">
{
    "Pattern": "Codes/RedeemCode",
    "Incoming": {
        "Error": delete,
        "Result": {
            "Drops": [{
                "AddedTimestamp": timestamp,
                "Attributes": [],
                "InstanceID": "geniid",
                "ProductID": "1332",
                "SeriesID": 0,
                "UpdatedTimestamp": timestamp
            }]
        }
    }
}
                </pre>
            </div>
        `;
    } else if (page === 'showcase') {
        contentDiv.innerHTML = `<iframe width="95%" height="95%" src="https://www.youtube.com/embed/M8YLesqfrYE?autoplay=1&controls=0&rel=0&showinfo=0&modestbranding=1" title="Voltage - 05-06-23" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    }
}    