const Calculatebmi=()=>{
    var height=document.getElementById('height').value
    var weight=document.getElementById('weight').value
    
        if (weight > 0 && height > 0) {
            var bmi = weight / ((height / 100) ** 2); // BMI formula: weight (kg) / (height (m) ^ 2)
            if(bmi<=18.5){
              document.getElementById("result").innerHTML = `Your BMI:   ${bmi.toFixed(2)}.......<span class="text-danger">YOU ARE UNDERWEIGHT!!!!!'</span><p class="rtag text-light">Worried?.....Don't be...WE WILL GUIDE YOU...<a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Click here
            </a></p>
      
        
        <!-- Modal -->
        <div class="modal" id="exampleModal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h5 class="modal-title text-light">Increase Physical Activity</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-light" style="text-align: justify;">
                  <p>Heart disease is the leading cause of death in the United States. The good news is you can lower many heart disease risk factors such as “bad” LDL cholesterol levels, increase "good" HDL cholesterol levels, and manage high blood pressure by simply moving more. Being active can also improve blood flow and give you more stamina and ability to cope with stress.
        
                      If you’re inactive, you’re nearly twice as likely to develop heart disease than if you’re active so for major health benefits aim for at least 150 minutes (2½ hours) each week. To ensure you’re reducing your sitting throughout the day and getting active, try breaking your activity up. Do 10 minutes of exercise, 3 times a day or one 30-minute session on five separate days each week. Any amount of physical activity is better than none and all activity counts! Exercising with a friend, family, or co-worker makes sticking to being physically active easier.
      
                      Try these activities:
                    </p>
                    <ul>
                    <li>Take a yoga or fitness class with a friend. You can even take a virtual class online with a friend in another city.
                  </li>
                    <li>Go for a daily walk with a neighbor.</li>
                    </ul>
                    <iframe width="422" height="294" src="https://www.youtube.com/embed/7RnGe6T3azA" title="Be Active — Keep Your Heart Healthy!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Understood</button>
                <a class="text-light" href="https://www.nhlbi.nih.gov/heart-truth/increase-physical-activity"><button type="button" class="btn btn-primary">More info</a></button>
              </div>
            </div>
          </div>
        </div>`;
            }else if(bmi>=18.6 && bmi<25){
              document.getElementById("result").innerHTML = `Your BMI:   ${bmi.toFixed(2)}.......<br><span class="text-success">YOU BMI is NORMAL.🙂</span><p class="rtag text-light">Good Job.....How to maintain it ..WE WILL GUIDE YOU...<a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Click here
            </a></p>
            <div class="modal" id="exampleModal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content bg-dark">
        <div class="modal-header">
          <h5 class="modal-title text-light">Maintain a Healthy Weight</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-light" style="text-align: justify;">
            <p>Being overweight is hard on your heart. It increases your risk of having heart disease, a stroke, high cholesterol, high blood pressure, and diabetes. Choosing heart-healthy foods and getting regular exercise will help you achieve and maintain a healthy weight. Also, find ways to reduce stress, which affects energy and hunger and, if chronic, can make your body store more fat.
  
              If your doctor diagnosed you with overweight or obesity, it’s important to follow their recommendations for losing weight. Health professionals recommend losing 5% to 10% of your initial weight over the course of about 6 months. But a loss of just 3% to 5% of your current weight can lower triglycerides and glucose levels in your blood, as well as your risk of developing type 2 diabetes. Losing more than 3% to 5% of your weight can improve blood pressure readings, lower “bad” LDL cholesterol, and increase “good” HDL cholesterol.
              
              If you need to lose weight, connecting with others can help keep you on track. Try these:</p>
              <ul>
              <li>Join a weight loss program with a buddy.</li>
              <li>Sign “social support” agreements with three family members or friends.</li>
              <li>Get your kids involved. Explain that it's important to sit less and move more to stay at a healthy weight and that they’ll have more energy to ride a bike or shoot hoops. Tell them you’ll do the same.</li></ul>
              <iframe width="422" height="294" src="https://www.youtube.com/embed/D--AtATgfyM" title="Obesity: The little things" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Understood</button>
          <button type="button" class="btn btn-primary"><a class="text-light" href="https://www.nhlbi.nih.gov/heart-truth/maintain-a-healthy-weight">More info</a></button>
        </div>
      </div>
    </div>
  </div>`;
            }else if(bmi>=25 && bmi<30){
              document.getElementById("result").innerHTML = `Your BMI:   ${bmi.toFixed(2)}.......<span class="text-warning">YOU ARE OVERWEIGHT!!!!</span> <p class="rtag text-light">Worried?.....Don't be...WE WILL GUIDE YOU...<a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Click here
            </a></p>
      
        
        <!-- Modal -->
        <div class="modal" id="exampleModal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h5 class="modal-title text-light">Eat a Heart-Healthy Diet </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-light" style="text-align: justify;">
                  <p>A healthy diet that is low in sodium and saturated fat is key to heart disease prevention. Try the highly rated Dietary Approaches to Stop Hypertension (DASH) eatingHealthy Eating GIF plan.
        
                      It recommends:
                    </p>
                    <ul>
                    <li>Eating vegetables, fruits, and whole grains
                  </li>
                    <li>Eating fish, poultry, beans, nuts, vegetable oils, and fat-free or low-fat dairy products</li>
                    <li>Limiting foods that are high in saturated fat and sodium</li>
                    <li>Limiting sugar and other sweeteners.</li>
                    </ul>
                    <p>
                      Sticking to your healthy eating goals is easier when you enlist the help of a friend or family member to keep you motivated.
                    </p>
                    <iframe width="422" height="294" src="https://www.youtube.com/embed/gdlVJOkmJd4" title="3 Delicious Heart Healthy Recipes – #OurHearts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Understood</button>
                <button type="button" class="btn btn-primary"><a class="text-light" href="https://www.nhlbi.nih.gov/heart-truth/eat-a-heart-healthy-diet">More info</a></button>
              </div>
            </div>
          </div>
        </div>`;
            }else if(bmi>=30){
              document.getElementById("result").innerHTML = `Your BMI:   ${bmi.toFixed(2)}.......<span class="text-danger">YOU have Obesity!!!!</span><p class="rtag text-light">ITS NOT TOO LATE!!...WE WILL GUIDE YOU...<a href="" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Click here
            </a></p>
      
        
        <!-- Modal -->
        <div class="modal" id="exampleModal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content bg-dark">
              <div class="modal-header">
                <h5 class="modal-title text-light">Eat a Heart-Healthy Diet </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body text-light" style="text-align: justify;">
                  <p>A healthy diet that is low in sodium and saturated fat is key to heart disease prevention. Try the highly rated Dietary Approaches to Stop Hypertension (DASH) eatingHealthy Eating GIF plan.
        
                      It recommends:
                    </p>
                    <ul>
                    <li>Eating vegetables, fruits, and whole grains
                  </li>
                    <li>Eating fish, poultry, beans, nuts, vegetable oils, and fat-free or low-fat dairy products</li>
                    <li>Limiting foods that are high in saturated fat and sodium</li>
                    <li>Limiting sugar and other sweeteners.</li>
                    </ul>
                    <p>
                      Sticking to your healthy eating goals is easier when you enlist the help of a friend or family member to keep you motivated.
                    </p>
                    <iframe width="422" height="294" src="https://www.youtube.com/embed/gdlVJOkmJd4" title="3 Delicious Heart Healthy Recipes – #OurHearts" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Understood</button>
                <button type="button" class="btn btn-primary"><a class="text-light" href="https://www.nhlbi.nih.gov/heart-truth/eat-a-heart-healthy-diet">More info</a></button>
              </div>
            </div>
          </div>
        </div>`;
            }
            } else {
            alert("Please enter valid values for weight and height.");
          }
            // document.getElementById("result").innerHTML = `Your BMI:   ${bmi.toFixed(2)}`;
          
    }

// const Calculatebmi = () => {
//     var height = document.getElementById('height').value;
//     var weight = document.getElementById('weight').value;

//     if (weight > 0 && height > 0) {
//       var bmi = weight / ((height / 100) ** 2); // BMI formula: weight (kg) / (height (m) ^ 2)
//       document.getElementById('result').innerHTML = 'Your BMI: ' + bmi.toFixed(2);
//     } else {
//       alert('Please enter valid values for weight and height.');
//     }
//   };
// document.addEventListener('DOMContentLoaded', function () {
//   var parallaxBackground = document.querySelector('.bgimg');

//   document.addEventListener('scroll', function () {
//     var scrolled = window.scrollY;
//     parallaxBackground.style.transform = 'translate3d(0, ' + scrolled * 0.5 + 'px, 0)';
//   });
// });