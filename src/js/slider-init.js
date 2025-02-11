export function initSliders() {
  let monthsSlider = $('#range-slider-months')
    .ionRangeSlider({
      type: 'single',
      min: 1,
      max: 12,
      from: 1,
      step: 1,
      grid: true,
      grid_num: 11,
      postfix: ' month',
      skin: 'round',
      onChange: function (data) {
        updateCalculation();
      },
    })
    .data('ionRangeSlider');

  let moneySlider = $('#range-slider-money')
    .ionRangeSlider({
      type: 'single',
      min: 300,
      max: 15000,
      from: 2000,
      step: 100,
      grid: true,
      grid_num: 5,
      prefix: '€ ',
      skin: 'round',
      onChange: function (data) {
        updateCalculation();
      },
    })
    .data('ionRangeSlider');

  function updateCalculation() {
    let months = monthsSlider.result.from;
    let amount = moneySlider.result.from;

    // Примерная формула (можно изменить)
    let calculatedAmount = amount + months * 500;

    // Обновляем текст в кнопке
    document.getElementById(
      'calculated-amount'
    ).textContent = `€ ${calculatedAmount}`;
  }

  // Вызываем расчет при инициализации
  updateCalculation();
}
