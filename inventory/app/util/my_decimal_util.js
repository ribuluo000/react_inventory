/**
 * Created by nick on 2018/1/27.
 *
 * https://github.com/MikeMcl/decimal.js
 */
import {Decimal} from 'decimal.js';
let obj = {

  /**
   * 将字符串或者数字转为 Decimal 类型的
   * @param str number|string
   * @returns {Decimal}
   */
  get_decimal_from_string:(str)=>{
    return new Decimal(str);
  },



  /**
   *
   *  加

   x = new Decimal('0xff.f')            // '255.9375'
   y = new Decimal('0b10101100')        // '172'
   z = x.plus(y)                        // '427.9375'

   a = Decimal.add(x, y)
   b = new Decimal(x).plus(y)
   a.equals(b)                    // true

   *
   * @param x number|string|Decimal
   * @param y number|string|Decimal
   * @returns {Decimal}
   */
  get_decimal_x_add_y:(x,y)=>{
    return Decimal.add(x, y);
  },



  /**
   *
   *  减

   0.3 - 0.1                     // 0.19999999999999998
   x = new Decimal(0.3)
   x.minus(0.1)                  // '0.2'
   x                             // '0.3'

   a = Decimal.sub(x, y)
   b = new Decimal(x).sub(y)
   a.equals(b)                    // true

   *
   * @param x number|string|Decimal
   * @param y number|string|Decimal
   * @returns {Decimal}
   */
  get_decimal_x_sub_y:(x,y)=>{
    return Decimal.sub(x, y);
  },



  /**
   *
   *  乘

   0.6 * 3                                  // 1.7999999999999998
   x = new Decimal(0.6)
   y = x.times(3)                           // '1.8'

   a = Decimal.mul(x, y)
   b = new Decimal(x).mul(y)
   a.equals(b)                    // true

   *
   * @param x number|string|Decimal
   * @param y number|string|Decimal
   * @returns {Decimal}
   */
  get_decimal_x_mul_y:(x,y)=>{
    return Decimal.mul(x, y);
  },



  /**
   *
   *  除

   z = new Decimal(355)
   pi = z.dividedBy(113)        // '3.1415929204'

   a = Decimal.div(x, y)
   b = new Decimal(x).div(y)
   a.equals(b)                    // true

   *
   * @param x number|string|Decimal
   * @param y number|string|Decimal
   * @returns {Decimal}
   */
  get_decimal_x_div_y:(x,y)=>{
    return Decimal.div(x, y);
  },



  /**
   * 判断 x 是否正确
   * @param x number|string|Decimal
   */
  isNaN:(x)=>{

    try{
      return new Decimal(x).isNaN();

    }catch (e){

    }

    return true;

  },

  decimal2string_show:(decimal)=>{
    return decimal.toString();
  },

  test:()=>{
    let ret = new Decimal('1');
    ret = new Decimal(ret);
    console.log(ret);
  },


};

/**
 *
 *

---
 // Set the precision and rounding of the default Decimal constructor
 Decimal.set({ precision: 5, rounding: 4 })

 // Create another Decimal constructor, optionally passing in a configuration object
 Decimal9 = Decimal.clone({ precision: 9, rounding: 1 })

 x = new Decimal(5)
 y = new Decimal9(5)

 x.div(3)                           // '1.6667'
 y.div(3)                           // '1.66666666'

 ---



 */

export default obj;
