class nav extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <nav class="nav">
       <div> <b class="time">9:41</b></div>
       <div > <img src="/assets/wifi.png" alt="wifi" srcset=""></div>
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

class dateCodesession extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="dateCodesession">
        <div class="dateCode">
            <div class="date">
               <p>Start date</p> 
               <p class="date-text">Choose your start date</p>
            </div>
            <div class="choose-day">
                <img src="/assets/error.png" alt=""> 
                <h4>Choose your start date to pay.</h4>
    
            </div>
    
        </div>
        <div class="discount">
            <span class="discount-text">Discount Code</span>
            <div class="code-box">
               <div>
                <div class="code">
                    <div>
                        <p class="main-code">247LOVE4U</p>
                    <div class="code-line"></div>
                    </div>
                    <p class="remove-code">Remove code</p>
                   </div>
                   <p class="code-green">Code successfully applied.</p>
               </div>
               
            </div>
    
        </div>
       </div>
        `
    }
}
class screennineBox extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="screennineBox">
        <div class="ham-box">
            <div class="hamburger"><i class="fa-solid fa-bars"></i></div>
        <p>Hi, Aderinsola!</p>
        </div>
        <div>
            <img src="./assets/profile.png" alt="">
        </div>
    </div>
        `
    }
}


class homeFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML=` <div class="homeFooter">
        <div class="home-footer"> 
          <div class="footer-icon">
              <i class="fa-solid fa-house"></i>
              <p>Home</p>
          </div>
          <div  class="footer-icons" >
              <i class="fa-solid fa-clock-rotate-left"></i>
              <p>History</p>
          </div>
          <div  class="footer-icons">
              <i class="fa-regular fa-bell"></i>
              <p>Notification</p>
          </div>
          <div  class="footer-icons">
              <i class="fa-solid fa-clock-rotate-left"></i>
              <p> Gardener</p>
          </div>
  </div>
       </div>`
    }
}

class homeModal extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="home-modal" id="bottomModal">
        <div class="modal-content">
         
          <div class="modal-header">
            <p>Mon, 08 Sep 2021.</p>
         <i class="fa-regular fa-circle-xmark close-btn" id="closeModalBtn"></i>
          </div>
    
          <div class="food-order">
            <div>
                <img src="./assets/food2.png" alt="">
    
            </div>
            <div>
                <p class="order-status">Order Status</p>
                <p class="order-text">Order has arrived</p>
            </div>
          </div>
    
          <div class="dotted-border">
            <p class="dotted-add">Delivery Address</p>
            <p class="dotted-add2">No 6B, Radiators Spring, Lightning Estate, Lagos, Nigeria.</p>
          </div>
    
    
          <div class="main-order-box">
           <div class="dotted-boxheader">
          <div class="order-sub"><img src="./assets/locate.png" />
            <p class="order-title">Order has arrived</p>
        </div>
            <p class="order-time">10:56 AM</p>
           </div>
            <div class="order-arrived">
                
                <p>Your order has arrived at your location. Pick it up!</p>
            </div>
    
          </div>
          <div class="main-order-box">
            <div class="dotted-boxheader">
           <div class="order-sub">  <i class="fa-solid fa-check" ></i>  <p class="order-title">Order on the way</p></div>
             <p class="order-time">9:14 AM</p>
            </div>
             <div class="order-arrived">
                
                 <p>Your order has been dispatched and is on the way to you.</p>
             </div>
     
           </div>
        </div>
      </div>
        `
    }
}
customElements.define("app-nav", nav);
customElements.define("app-accordion", accordion);
customElements.define("app-datecodesession",dateCodesession )
customElements.define("app-screennine",screennineBox)
customElements.define("app-deliverysection", deliverySection)
customElements.define("app-homefooter", homeFooter);
customElements.define("app-homemodal", homeModal)

