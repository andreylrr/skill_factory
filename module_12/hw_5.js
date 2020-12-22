/*
    Пятое задание в модуле "Введение в JavaScript" в разделе "Объекты"
*/

// Создаем родительский класс для электроприборов
class ElectricDevice {
    constructor() {
        this.v_switchOn = false;
    }
    switchOn() {
        this.v_switchOn = true;
    }
    switchOff() {
        this.v_switchOn = false;
    }
    isOn(){
        return this.v_switchOn === true;
    }
}

// Создаем класс для электроприбора "Пылесос"
class VacuumCleaner extends ElectricDevice {
    constructor (brand, power, vacuum_power, volume_bag){
        super();
        this.v_brand = brand;
        this.v_power = power;
        this.v_vacuum_power = vacuum_power;
        this.v_volume_bag = volume_bag;
        this.v_bag_current_volume = 0;
    }

    // Метод для замены мешка для пыли
    replaceBag()
    {
        this.v_bag_current_volume = 0;
        console.log(`Вставлен новый пылесборник.`)
    }
    // Метод управляющий непрерывной работой пылесоса.
    work(time){
        if ( this.v_bag_current_volume > this.v_volume_bag ){
            console.log(`Мешок для пыли полный. Смените мешок для продолжения работы.`);
            return -1;
        }
        if ( time > 5 ){
            console.log(`Пылесос не может работать без перерывов больше чем 5 часов. Сократите время непрерывной работы.`);
            return -1;
        }
        console.log(`Пылесос отработал ${time} часов.`)
        this.v_bag_current_volume += time*0.5;
        return this.v_bag_current_volume;
    }
    // Переписываем ф-цию включения электроприбора
    switchOn(){
        if ( this.bag_current_volume > this.v_volume_bag ){
            console.log(`Пылесос не возмножно включить, так как в нем переполнился мешок для сбора пыли.`)
            return -1;
        }
        this.v_switchOn = true;
    }
}

// Создаем класс для электроприбора "Чайник"
class Kettle extends ElectricDevice {
    constructor (brand, power, volume) {
        super();
        this.v_brand = brand;
        this.v_power = power;
        this.v_volume = volume;
        this.v_current_volume = 0;
    }
    getBrand(){
        return this.v_brand;
    }
    // Метод для получения мощности чайника
    getPower(){
        return this.v_power;
    }
    // Метод для получения объема воды, который может чайник вскипятить
    getVolume(){
        return this.v_volume;
    }
    // Переписываем ф-цию включения. Добавляем проверку на наличие воды в чайнике
    switchOn(){
        if ( this.v_current_volume < 0.1 ){
            console.log(`Чайник не возмножно включить, так как в нем воды.`)
            return -1;
        }
        this.v_switchOn = true;
    }
    // Метод для добавления воды в чайник
    addWater(liter){
        if ( this.v_current_volume + liter > this.v_volume )
        {
            console.log(`Такое количество воды  ${liter} добавить нельзя. Чайник переполнится.`);
            return -1;
        }
        else
        {
            this.v_current_volume += liter;
            console.log(`Добавлено ${liter} воды в чайник. Общее количество воды в чайнике - ${this.v_current_volume}`);
            return this.v_current_volume;
        }
    }
    // Метод для получения кипятка из чайника
    pourOutWater(liter){
        if ( this.v_current_volume === liter < 0 )
        {
            console.log(`Такого количества воды ${liter} в чайнике нет.`);
            return -1;
        }
        else
        {
            this.v_current_volume -= liter;
            console.log(`Такое количество воды ${liter} было вылито из чайника. `);
            console.log(`В чайнике осталось ${this.v_current_volume} литров воды.`);
            return this.v_current_volume;
        }
    }
}

const kettle = new Kettle("Bosh", 1.7, 2);
const vac_cleaner = new VacuumCleaner("Samsung", 2, 1700, 10);

// Проверяем включен ли чайник
if ( !kettle.isOn() )
{
    console.log(`Чайник не включен.`)
}

// Пыаемся включить пустой чайник
kettle.switchOn();
// Добавляем воды в чайник
kettle.addWater(0.7);
// Включаем чайник
kettle.switchOn();
// Выключаем чайник
kettle.switchOff();
// Наливаем воду из чайника
kettle.pourOutWater(0.5);

// Проверяем включен ли пылесгс
if ( !vac_cleaner.isOn()){
    console.log(`Пылесос не включен.`)
}
// Включаем пылесос
vac_cleaner.switchOn();
// Используем пылесос 5 часов
vac_cleaner.work(5);
// Пытаемся использовать пылесос 10 часов
vac_cleaner.work(10);
// Используем пылесос 5 часов
vac_cleaner.work(5);
// Используем пылесос 5 часов
vac_cleaner.work(5);
// Используем пылесос 5 часов
vac_cleaner.work(5);
// Используем пылесос 5 часов
vac_cleaner.work(5);
// Используем пылесос 5 часов
vac_cleaner.work(5);
// Меняем пылесборник в пылесосе
vac_cleaner.replaceBag();
// Используем пылесос 5 часов
vac_cleaner.work(5);
