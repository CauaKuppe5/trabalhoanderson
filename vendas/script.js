document.addEventListener("DOMContentLoaded", function() {
    // Produto inicial
    const initialProduct = {
        nome: "CUPCAKE",
        precoCusto: 3,
        precoVenda: 8
    };

    // Inicializar lista com o produto inicial
    addProductToList(initialProduct);

    // Inicializar lista de produtos disponíveis para venda
    const saleProductDropdown = document.getElementById("saleProductName");
    const initialProductNameOption = document.createElement("option");
    initialProductNameOption.value = initialProduct.nome;
    initialProductNameOption.text = initialProduct.nome;
    saleProductDropdown.add(initialProductNameOption);

    // Adicionar evento ao formulário de venda
    const saleForm = document.getElementById("sale-form");
    saleForm.addEventListener("submit", function(event) {
        event.preventDefault();
        addSale();
    });
});

function addProductToList(product) {
    // Criar elemento li para o produto
    const productList = document.getElementById("product-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>${product.nome}</strong> - Custo R$${product.precoCusto.toFixed(2)} - Venda R$${product.precoVenda.toFixed(2)}`;

    // Adicionar à lista
    productList.appendChild(listItem);

    // Adicionar produto à lista de produtos disponíveis para venda
    const saleProductDropdown = document.getElementById("saleProductName");
    const productOption = document.createElement("option");
    productOption.value = product.nome;
    productOption.text = product.nome;
    saleProductDropdown.add(productOption);
}

function addSale() {
    // Obter valores do formulário de venda
    const saleProductName = document.getElementById("saleProductName").value;
    const saleQuantity = parseInt(document.getElementById("saleQuantity").value);

    // Validar entradas
    if (!saleProductName || isNaN(saleQuantity) || saleQuantity <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    // Simulação de uma chamada à API para lançar uma venda
    const newSale = {
        product: saleProductName,
        quantity: saleQuantity,
        date: new Date().toLocaleString(),
    };

    // Atualizar lista de vendas
    updateSalesList(newSale);

    // Limpar formulário de venda
    clearSaleForm();
}

function updateSalesList(sale) {
    const salesList = document.getElementById("product-list");
    const listItem = document.createElement("li");
    listItem.innerHTML = `<strong>Data:</strong> ${sale.date} - <strong>Produto:</strong> ${sale.product} - <strong>Quantidade:</strong> ${sale.quantity}`;
    salesList.appendChild(listItem);
}

function clearSaleForm() {
    // Limpar campos do formulário de venda
    document.getElementById("saleQuantity").value = "";
}
