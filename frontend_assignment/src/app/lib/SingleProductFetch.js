export async function singleProductFetch(id){
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
}