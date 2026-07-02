/**
 * ==========================================
 * WTS Ticket Generator
 * Version 0.0.3
 * app.js
 * ==========================================
 */

document.addEventListener("DOMContentLoaded", () => {

    const generateBtn = document.getElementById("generateBtn");

    generateBtn.addEventListener("click", generateTickets);

});

function generateTickets() {

    const ticketCount = parseInt(
        document.getElementById("ticketCount").value
    );

    const startNumber = parseInt(
        document.getElementById("startNumber").value
    );

    const status = document.getElementById("status");

    const preview = document.getElementById("preview");

    preview.innerHTML = "";

    if (isNaN(ticketCount) || ticketCount < 1) {

        status.innerHTML = "❌ Invalid Ticket Count";

        return;

    }

    if (isNaN(startNumber) || startNumber < 1) {

        status.innerHTML = "❌ Invalid Starting WTS Number";

        return;

    }

    status.innerHTML =
        "✅ Ready to generate " +
        ticketCount +
        " ticket(s) starting from WTS " +
        String(startNumber).padStart(3, "0");

    // Temporary Preview

    for (let i = 0; i < ticketCount; i++) {

        const div = document.createElement("div");

        div.style.background = "#fff";
        div.style.padding = "15px";
        div.style.marginBottom = "15px";
        div.style.borderRadius = "8px";
        div.style.boxShadow = "0 2px 8px rgba(0,0,0,.1)";

       const ticket = generateTicket();

let html =
"<h3>WTS " +
String(startNumber+i).padStart(3,"0") +
"</h3>";

html += "<table border='1' cellspacing='0' cellpadding='8'>";

for(let r=0;r<3;r++){

    html+="<tr>";

    for(let c=0;c<9;c++){

        html+="<td style='width:35px;height:35px;text-align:center;'>";

        html+= ticket[r][c]===null ? "" : ticket[r][c];

        html+="</td>";

    }

    html+="</tr>";

}

html+="</table>";

div.innerHTML = html;

        preview.appendChild(div);

    }

}
