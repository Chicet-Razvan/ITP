document.querySelector(".hamburger").addEventListener(
"click", () => {
    document.querySelector('.container').classList.toggle('change')
}
)

const panels = document.querySelectorAll('.panel')
const boxs = document.querySelectorAll('.box')
const panel1 = document.getElementById('panel1')
const panel2 = document.getElementById('panel2')
const panel3 = document.getElementById('panel3')
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')




  panel1.addEventListener('click', () => {
    removeActiveClasses()
    panel1.classList.add('active')
    box1.classList.add('active')
   console.log( panel)
  })

  panel2.addEventListener('click', () => {
    removeActiveClasses()
    panel2.classList.add('active')
    box2.classList.add('active')
   console.log( panel)
  })

  panel3.addEventListener('click', () => {
    removeActiveClasses()
    panel3.classList.add('active')
    box3.classList.add('active')
   console.log( panel)
  })


function removeActiveClasses () {
  boxs.forEach(box => {
    box.classList.remove('active')
  })

  panels.forEach(panel => {
    panel.classList.remove('active')
    
  })
}




