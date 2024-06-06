function solution(n, k) {
    const pricePerSkewer = 12000;
    const pricePerDrink = 2000;
    
    // 양꼬치 가격 계산
    const skewerCost = n * pricePerSkewer;
    
    // 서비스 음료수 개수 계산
    const freeDrinks = Math.floor(n / 10);
    
    // 실제 음료수 가격 계산
    const drinkCost = (k - freeDrinks) * pricePerDrink;
    
    // 총 가격 계산
    const totalCost = skewerCost + drinkCost;
    
    return totalCost;
}
