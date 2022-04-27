const headline = document.getElementsByClassName("headline")

window.addEventListener('scroll', function(e) {
  const frontClouds = Array.from(document.getElementsByClassName("frontCloud"))
  const middleClouds = Array.from(document.getElementsByClassName("middleCloud"))
  const backClouds = Array.from(document.getElementsByClassName("backCloud"))
  const scrolled = window.pageYOffset;
  const slowest = scrolled * 0.8
  const medium = scrolled * 0.6
  const fastest = scrolled * 0.3

  frontClouds.forEach (cloud => cloud.style.transform = 'translateY('+fastest+'px')
  middleClouds.forEach (cloud => cloud.style.transform = 'translateY('+medium+'px')
  backClouds.forEach (cloud => cloud.style.transform = 'translateY('+slowest+'px')
})

document.addEventListener('mousemove', (event) => {
   if (event.clientX < (window.innerWidth /2) && event.clientY < (window.innerHeight /2)) {
    headline[0].style.color= 'orange'
   } 
   if (event.clientX < (window.innerWidth /2) && event.clientY > (window.innerHeight /2)) {
    headline[0].style.color= 'yellow'
   }
   if (event.clientX > (window.innerWidth /2) && event.clientY > (window.innerHeight /2)) {
    headline[0].style.color= 'purple'
   } 
   if (event.clientX > (window.innerWidth /2) && event.clientY < (window.innerHeight /2)) {
    headline[0].style.color= 'lime'
   }
});

