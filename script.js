// --- MODELOA ---
let hambre = 5;
let felicidad = 5;

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
        // --- EGUNERATZEA (Gertaerak) ---
    
    document.getElementById("btn-comer").onclick = () => {
        // Logika: Gosea 0 baino handiagoa bada, 1 kentzen dugu.
        if (hambre > 0) {
            hambre--; 
        }
        vista(); // GARRANTZITSUA: Berriro margotzen dugu
    }

    document.getElementById("btn-jugar").onclick = () => {
        // Logika: Zoriontasuna 10 baino txikiagoa bada, 1 gehitzen dugu.
        if (felicidad < 10) {
            felicidad++; // Osatu hau
        }
        vista(); // Bista birkargatzen dugu
    }
}

vista();