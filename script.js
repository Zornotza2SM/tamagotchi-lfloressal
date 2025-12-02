// --- MODELOA ---
let hambre = 0;
let felicidad = 10;

// --- BISTA ---
function vista() {
    // 1. HTMLa sortzen dugu
    document.getElementById("app").innerHTML = `
        <div class="pet-screen">
            <h1>PIXEL PET</h1>
            
            <div class="pet-face">
                👾 
            </div>

            <div class="stats">
                <div>🍗 Gosea: ${hambre}</div>
                <div>❤️ Zoriontasuna: ${felicidad}</div>
            </div>

            <div class="controls">
                <button class="boton" id="btn-comer">Jana eman</button>
                <button class="boton" id="btn-jugar">Jolastu</button>
            </div>
        </div>
    `;

    // HEMEN JOANGO DIRA GERTAERAK (3. FASEA)
}

vista();