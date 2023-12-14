document.addEventListener("DOMContentLoaded", function() {
    // Valores das despesas fixas
    const aluguel = 1500;
    const luz = 800;
    const agua = 150;
    const internet = 100;

    // Vendas totais
    const totalSales = 0; // Inicialmente, sem vendas

    // Calcular lucro
    const profit = totalSales - (aluguel + luz + agua + internet);

    // Atualizar valores no HTML
    document.getElementById("profit").textContent = `R$ ${profit.toFixed(2)}`;
    document.getElementById("total-sales").textContent = `R$ ${totalSales.toFixed(2)}`;
});
