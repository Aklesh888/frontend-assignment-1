export async function fetchItems(){
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
}