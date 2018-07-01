/**
 * Created by nick on 2018/6/28.
 */
import style_base_value_util from './style_base_value_util';
export default {
    style_base_value_util,
    common_container : {
        padding : 40,
        backgroundColor:'#ffffff',

    },
    common_ScrollView : {
        flex: 1,
    },

    /**
     * 字体大小
     */
    fontSizeS:{
        fontSize:style_base_value_util.fontSizeS,
    },
    fontSizeM:{
        fontSize:style_base_value_util.fontSizeM,
    },
    fontSizeL:{
        fontSize:style_base_value_util.fontSizeL,
    },

    /**
     * 字体颜色
     */
    textColorBlack:{
        color:style_base_value_util.textColorBlack,
    },
    textColorGray:{
        color:style_base_value_util.textColorGray,
    },
    textColorWhite:{
        color:style_base_value_util.textColorWhite,
    },
    textColorOrange:{
        color:style_base_value_util.textColorOrange,
    },
    textColorBlue:{
        color:style_base_value_util.textColorBlue,
    },
    textColorYellow:{
        color:style_base_value_util.textColorYellow,
    },

    /**
     * 间距大小
     */
    paddingXXS:{
        padding:style_base_value_util.sizeXXS,
    },
    paddingXS:{
        padding:style_base_value_util.sizeXS,
    },
    paddingS:{
        padding:style_base_value_util.sizeS,
    },
    paddingM:{
        padding:style_base_value_util.sizeM,
    },
    paddingL:{
        padding:style_base_value_util.sizeL,
    },

    flex1 : {
        flex : 1,
    },
    textAlignRight : {
        textAlign : 'right',
    },
    textAlignCenter : {
        textAlign : 'center',
    },

    flexWrapWrap : {
        flexWrap : 'wrap',
    },
    flexWrapNowrap : {
        flexWrap : 'nowrap',
    },
    flexDirectionRow : {
        flexDirection : 'row',
    },
    flexDirectionColumn : {
        flexDirection : 'column',
    },

    positionAbsolute : {
        position : 'absolute',
    },
    positionRelative : {
        position : 'relative',
    },
    alignItemsCenter : {
        alignItems : 'center',
    },
    alignItemsStretch : {
        alignItems : 'stretch',
    },
    alignSelfCenter : {
        alignSelf : 'center',
    },
    alignSelfStretch : {
        alignSelf : 'stretch',
    },
    justifyContentCenter : {
        justifyContent : 'center',
    },
    justifyContentSpaceBetween : {
        justifyContent : 'space-between',
    },
    justifyContentSpaceAround : {
        justifyContent : 'space-around',
    },
    overflowHidden : {
        overflow : 'hidden',
    },
    overflowScroll : {
        overflow : 'scroll',
    },

    mRowSpaceBetween : {
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    mRowSpaceAround : {
        flexDirection : 'row',
        justifyContent : 'space-around',
    },
    mInputDelBorderBottom : {
        borderBottomWidth : 0,
    },

    invisible : {
        display : 'none',
    },
    visible : {
        display : 'flex',
    },

    md:{
        Core : {
            'color-brand1-1' : '#00BBD3',
            'color-brand1-6' : '#1A9CB7',
            'color-brand1-9' : '#0096A6',
            'color-error-3' : '#D50000',
            'color-line1-1' : '#DADADA',
            'color-line1-2' : '#E0E0E0',
            'color-text1-1' : '#9E9E9E',
            ['font-size-title'] : 40,
            ['font-size-subhead'] : 32,
            ['font-size-body-3'] : 28,
            ['font-size-body-2'] : 28,
            ['font-size-body-1'] : 28,
            ['font-size-caption'] : 24,
            ['font-size-footnote'] : 20
        },
        Input : {
            'md-placeholder-height' : 50,
            'md-help-margin-top' : 16,
            'md-input-height' : 50,
            'md-placeholder-font-size' : 28,
            'md-input-margin-bottom' : 0
        }
    },


};