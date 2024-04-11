function printArr(){
    let arr = new Array(10);
    for(let i = 0; i < 10; i++) arr[i] = Math.floor(Math.random()*21-10)
    document.getElementById("input1").value= arr

    let parr = new Array(
        "https://3d-linker.ru/components/com_jshopping/files/img_products/full_Jiuzhaigou_park_China_Parks_Lake_Autumn_Mountains_512689_5200x3470.jpg",
        "https://sun9-37.userapi.com/k_5GjPbNmRjTPVXq_1ocjp8qeS2EMfCQVtZd8w/R2Q3pvfkNF0.jpg"
    );
    document.getElementById("img").src = parr[Math.floor(Math.random()*arr.length)]   
}