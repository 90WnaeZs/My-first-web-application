let photo1 = {
    photo: 'images/photo1.jpg',
    title: "First photo's title.",
    description: "First photo's description."
};

let photo2 = {
    photo: 'images/photo2.jpg',
    title: "Second photo's title.",
    description: "Second photo's description."
};

let photo3 = {
    photo: 'images/photo3.jpg',
    title: "Third photo's title.",
    description: "Third photo's description."
};

let photo4 = {
    photo: 'images/photo4.jpg',
    title: "Fourth photo's title.",
    description: "Fourth photo's description."
};

let photo5 = {
    photo: 'images/photo5.jpg',
    title: "Fifth photo's title.",
    description: "Fifth photo's description."
};

let photo6 = {
    photo: 'images/photo6.jpg',
    title: "Sixth photo's title.",
    description: "Sixth photo's description."
};

let photo7 = {
    photo: 'images/photo7.jpg',
    title: "Seventh photo's title.",
    description: "Seventh photo's description."
};

let photo8 = {
    photo: 'images/photo8.jpg',
    title: "Eighth photo's title.",
    description: "Eighth photo's description."
};

let currentPhoto = 0;
let imagesData = [photo1,photo2,photo3,photo4,photo5,photo6,photo7,photo8];
$('#photo').attr('src', imagesData[currentPhoto].photo);

let photoLoad = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    $('h1').text(imagesData[photoNumber].title);
    $('p').text(imagesData[photoNumber].description);
}

photoLoad(currentPhoto);


$('#right_btn').click(() => 
{
    if(currentPhoto<imagesData.length-1) 
    {
        currentPhoto++;
        photoLoad(currentPhoto);
    }
    else if(currentPhoto>=imagesData.length-1) {
        currentPhoto=0; 
        photoLoad(currentPhoto);
    }
});


$("#left_btn").click(() => 
{
    if(currentPhoto>=1) 
    {
        currentPhoto--; 
        photoLoad(currentPhoto);
    }
    else if(currentPhoto===0) {
        currentPhoto=imagesData.length-1;
        photoLoad(currentPhoto);
    }
});

imagesData.forEach((item, index) => {
    $('#thumbnails').append(`<div class="box" data-index="${index}"><div class="title">Something hidden</div><img src="${item.photo}"></img></div>`);
});