import color from "./color_util";

/**
 * Author: 00天火00
 * Email: tianhuo@thuol.com
 * Date: 2018/5/15
 * Time: 上午11:14
 */
const transparentColor = 'transparent';

export default {
    ...color,

    fontSizeXXL : 20,
    fontSizeXL : 18,
    fontSizeL : 16,
    fontSizeM : 14,
    fontSizeS : 12,
    fontSizeXS : 10,
    fontSizeXXS : 8,

    sizeXXL : 40,
    sizeXL : 36,
    sizeL : 30,
    sizeM : 26,
    sizeS : 20,
    sizeXS : 16,
    sizeXXS : 10,
    size5 : 5,

    borderSizeXXL : 20,
    borderSizeXL : 16,
    borderSizeL : 8,
    borderSizeM : 4,
    borderSizeS : 2,
    borderSizeXS : 1,
    borderSizeXXS : 1,
    borderSizeNone : 0,

    borderRadiusSizeXXL : 20000,
    borderRadiusSizeXL : 16,
    borderRadiusSizeL : 8,
    borderRadiusSizeM : 6,
    borderRadiusSizeS : 4,
    borderRadiusSizeXS : 3,
    borderRadiusSizeXXS : 2,
    borderRadiusNone : 0,

    //边框色
    borderColor : color.grey.color6,        //灰
    borderColorGray : color.grey.color6,    //灰
    borderColorGreen : color.green.color6,    //绿

    // 字体色
    textColorBlack : color.grey.color10,    //黑
    textColorGray : color.grey.color7,      //灰
    textColorWhite : color.grey.color1,     //白
    textColorOrange : color.orange.color6,     //橙
    textColorBlue : color.blue.color7,     //蓝
    textColorYellow : color.yellow.color6,     //黄

    // 背景色
    backgroundColorGray : color.grey.color4, //灰
    backgroundColorWhite : color.grey.color1, //白
    backgroundColorBlack : color.grey.color9, //黑
    backgroundColorGreen : color.green.color6, //绿
    backgroundColorOrange : color.orange.color6, //橙
    backgroundColorBlue : color.blue.color5, //蓝
    backgroundColorRed : color.red.color5, //红
    backgroundColorYellow : color.yellow.color1, //黄

    backgroundColorTransparent : transparentColor,
    backgroundColorContainer : color.grey.color4,

    /***********天火*********/
    //按钮大小
    btnHeightXXL : 50,
    btnHeightXL : 46,
    btnHeightL : 40,
    btnHeightM : 36,
    btnHeightS : 30,
    btnHeightXS : 26,

    /***********天火结束*********/


    heightMyLabelExtraComponent:'56',
    /**
     * 默认分隔线颜色和大小
     */
    commonSeparatorHeight__Immutable__:1,
    commonSeparatorColor:color.grey.color5,

    /**
     * 默认 Header 背景颜色和大小
     */
    heightHeader:80,
    backgroundColorHeader:color.blue.color5,
    textColorHeaderCenter : color.grey.color1,     //白
    textAlignHeaderCenter : 'center',     //居中
    fontSizeHeaderCenter : 18,     //XL
};

