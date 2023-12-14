const myHeaders = {
    "Content-Type": "application/json", 
  };

document.addEventListener("DOMContentLoaded", function() {
    // Produto inicial
    const initialProduct = {
        nome: "CUPCAKE",
        precoCusto: 3,
        precoVenda: 8
    };


    // Inicializar lista com o produto inicial
    addProductToList(initialProduct);

    // Adicionar evento ao formulário
    const addProductForm = document.getElementById("add-product-form");
    addProductForm.addEventListener("submit", function(event) {
        event.preventDefault();
        addProduct();
    });
});

async function addProduct() {
    // Obter valores do formulário
    const productName = document.getElementById("productName").value;
    const productCostPrice = parseFloat(document.getElementById("productCostPrice").value);
    const productSellingPrice = parseFloat(document.getElementById("productSellingPrice").value);

    // Validar entradas
    if (!productName || isNaN(productCostPrice) || isNaN(productSellingPrice)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Criar objeto de produto
    const newProduct = {
        nome: productName,
        precoCusto: productCostPrice,
        precoVenda: productSellingPrice
    };
    const bodyJson = JSON.stringify(newProduct)
    const res = await fetch(
        "http://localhost:3001/produtos",
    { 
        
        headers:myHeaders, 
        method:"POST",
        body:bodyJson
    }
        )
    const resposta = await res.json()
    console.log(resposta)
    // Adicionar produto à lista
    addProductToList(newProduct);

    // Limpar formulário
    clearForm();
}

function addProductToList(product) {
    // Criar elemento li para o produto
    const productList = document.getElementById("product-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${product.nome}</strong> - Custo R$${product.precoCusto.toFixed(2)} - Venda R$${product.precoVenda.toFixed(2)}`;

    // Adicionar à lista
    productList.appendChild(listItem);
}

function clearForm() {
    // Limpar campos do formulário
    document.getElementById("productName").value = "";
    document.getElementById("productCostPrice").value = "";
    document.getElementById("productSellingPrice").value = "";
}
