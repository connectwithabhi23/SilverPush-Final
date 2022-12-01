let bookNowBtn = document.querySelectorAll('.book-now-div')
const backbtn = document.querySelector('#back-btn')
const modal = document.querySelector('#modal')
const iframe = document.querySelector('iframe')


const urls = ['https://www.youtube.com/watch?v=cOIwmXIg7RY', 'https://www.youtube.com/watch?v=zOl6qNNF-x4','https://www.youtube.com/watch?v=bgc2HcyYHvQ',
'https://www.youtube.com/watch?v=Oys6wjPucpM','https://www.youtube.com/watch?v=12mz4mmivEM','https://www.youtube.com/watch?v=DfRjozJKEmo',
'https://www.youtube.com/watch?v=OlI_urVSO_M','https://www.youtube.com/watch?v=USTYQkzMhWI','https://www.youtube.com/watch?v=JDhIX9MHgPA',
'https://www.youtube.com/watch?v=JDhIX9MHgPA']

const keys = urls.map((url)=> url.split('v=')[1].split('&')[0])
let count = -1;


bookNowBtn.forEach((btn)=>{

    btn.addEventListener('click', openModal)
})

backbtn.addEventListener('click',()=>{
    modal.style.display='none'
    iframe.removeAttribute('src')
})

function openModal(){
    console.log('modal clicked')
    if(count >=9){
        count = 0
    }
    else{
        count = count+1;
    }
    
    modal.style.display = 'block';
    let url = `https://www.youtube.com/embed/${keys[count]}?autoplay=1&mute=1`
    iframe.setAttribute('src', url)
}








