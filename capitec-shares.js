class CapitecShareCalculator extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.position = "center"
    }
 
     static get observedAttributes() { return ['position']; }
 
     attributeChangedCallback(name, curVal, newVal) {         
         switch(name) {
             case 'position':
                 this.position = newVal;
         }
     }


    connectedCallback() {
        var template = `
          <style>
             @import url("capitec-shares.css");
          </style>

          <div class="form-container">          
            <form id="sharePriceForm" class="container-${this.getAttribute('position') || 'left'}">
                <div id="loader" class="loader" hidden></div>
                <label for="capital">Enter Amount(R):</label><br>
                <input type="number" id="capital" name="capital" value="0.00" placeholder = "Amount you have" required><br>
                <label for="shares">Shares</label><br>
                <input type="text" id="shares" name="shares" value="" disabled><br>
                <input type="button" id="submit-form"  value="Calculate shares">
            </form>
          </div>
        `;
        let tmpl = document.createElement('template');
        tmpl.innerHTML = template;
        this.shadow.appendChild(tmpl.content.cloneNode(true));
        
        this.shadow.getElementById('submit-form').addEventListener('click', ()=> {
            
            let loader = this.shadow.getElementById('loader');
            loader.attributes.removeNamedItem('hidden');

            let userAmount = this.shadow.getElementById('capital').value;

            calculateShares(parseFloat(userAmount)).then((val) => {
                this.shadow.getElementById('shares').value = val.toFixed(2);
                loader.setAttribute('hidden','');
            });             
        });

        async function  calculateShares(amount) { 
            
            let num_shares = 0.0;
            if(amount > 0) {
                const apiKey = '5I0MAZPYRHZ0U1CF';
                const stock_symbol = 'CPI.JO';
                const sharePriceApi = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock_symbol}&apikey=${apiKey}`;
                
                const res = await fetch(sharePriceApi);
                const json = await res.json();
    
                let sharePrice = parseFloat(json['Global Quote']['05. price']) / 100;
                num_shares = (amount * 1.0) / sharePrice;               
            }
            return num_shares;          
         };
    }
}



customElements.define('share-calculator', CapitecShareCalculator);