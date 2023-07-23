class nav extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <nav class="nav">
        <b class="time">9:41</b>
        <img src="/assets/wifi.png" alt="wifi" srcset="">
    </nav>
        `
    }
}
class accordion extends HTMLElement{
    connectedCallback(){
            this.innerHTML=`
            <div class="accordion">
            <div class="accordion-item">
                <div class="accordion-header">
                   <div class="food">
                    <div class="food-box">
                        <img src="/assets/food.png " alt=""/>
                    <span>Food</span>
                    </div>
                    <span class="food-text">Expand details <i class="fa-solid fa-chevron-down"></i></span>
                   </div>
                   <p>₦27,000</p>
                    

                </div>
              
               
                <div class="accordion-content">
                    <p>Get chef cooked meals delivered on schedule</p>
                </div>
            </div>
            
            
            <div class="accordion-item laundry">
                <div class="accordion-header">
                   <div class="food">
                    <div class="food-box">
                        <img src="/assets/laundry.png " alt=""/>
                    <span>Laundry</span>
                    </div>
                    <span class="food-text">Expand details <i class="fa-solid fa-chevron-down"></i></span>
                   </div>
                   <p>₦27,000</p>
                    

                </div>
              
               
                <div class="accordion-content">
                    <p>Get chef cooked meals delivered on schedule</p>
                </div>
            </div>

            <div class="accordion-item cleaning">
                <div class="accordion-header">
                   <div class="food">
                    <div class="food-box">
                        <img src="/assets/house.png " alt=""/>
                    <span>Cleaning</span>
                    </div>
                    <span class="food-text">Expand details <i class="fa-solid fa-chevron-down"></i></span>
                   </div>
                   <p>₦27,000</p>
                    

                </div>
              
               
                <div class="accordion-content">
                    <p>Get chef cooked meals delivered on schedule</p>
                </div>
            </div>
            <div class="accordion-item beauty">
                <div class="accordion-header">
                   <div class="food">
                    <div class="food-box">
                        <img src="/assets/nail.png " alt=""/>
                    <span>Beauty</span>
                    </div>
                    <span class="food-text">Expand details <i class="fa-solid fa-chevron-down"></i></span>
                   </div>
                   <p>₦27,000</p>
                    

                </div>
              
               
                <div class="accordion-content">
                    <p>Get chef cooked meals delivered on schedule</p>
                </div>
            </div>
            <!-- Add more sections if needed -->
        </div>
            `

}
}

customElements.define("app-nav", nav);
customElements.define("app-accordion", accordion);