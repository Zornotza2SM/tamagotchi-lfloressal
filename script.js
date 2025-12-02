// --- MODELOA ---
let hambre = 2;
let felicidad = 2;

// --- BISTA ---
function vista() {

    let estaMuerto = (hambre >= 10 || felicidad <= 0);

    // 1. HTMLa sortzen dugu
    document.getElementById("app").innerHTML = `
        <div class="pet-screen">
            <h1>PIXEL PET</h1>
            
            <div class="pet-face">
                ${estaMuerto ? "💀" : "👾"}
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
        if (!estaMuerto) {
                    if (hambre > 0) {
            hambre--; 
        }
        vista(); // GARRANTZITSUA: Berriro margotzen dugu
        }// Logika: Gosea 0 baino handiagoa bada, 1 kentzen dugu.
    }

    document.getElementById("btn-jugar").onclick = () => {
        if (!estaMuerto) {
        // Logika: Zoriontasuna 10 baino txikiagoa bada, 1 gehitzen dugu.
        if (felicidad < 10) {
            felicidad++; // Osatu hau
        }
        vista(); // Bista birkargatzen dugu
        }
    }
}

vista();


// --- DENBORA BEGIZTA (LOOP) ---

function pasoDelTiempo() {
    // 2 segundoro (2000ms), maskotak okerrera egiten du
    setTimeout(() => {
        
        // 1. Estatistikak okertzen ditugu
        hambre++;      // Gosea sartzen zaio
        felicidad--;   // Tristetu egiten da

        // 2. Balioak mugatzen ditugu (infinituak izan ez daitezen)
        if (hambre > 10) hambre = 10;
        if (felicidad < 0) felicidad = 0;

        // 3. Pantaila eguneratzen dugu
        vista();

        // 4. Tenporizadoreari berriro deitzen diogu (Begizta infinitua)
        pasoDelTiempo();

    }, 2000);
}

// DENBORA HASI
pasoDelTiempo();