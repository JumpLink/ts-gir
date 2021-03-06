export enum Status {
  CAIRO_STATUS_SUCCESS,
  CAIRO_STATUS_NO_MEMORY,
  CAIRO_STATUS_INVALID_RESTORE,
  CAIRO_STATUS_INVALID_POP_GROUP,
  CAIRO_STATUS_NO_CURRENT_POINT,
  CAIRO_STATUS_INVALID_MATRIX,
  CAIRO_STATUS_INVALID_STATUS,
  CAIRO_STATUS_NULL_POINTER,
  CAIRO_STATUS_INVALID_STRING,
  CAIRO_STATUS_INVALID_PATH_DATA,
  CAIRO_STATUS_READ_ERROR,
  CAIRO_STATUS_WRITE_ERROR,
  CAIRO_STATUS_SURFACE_FINISHED,
  CAIRO_STATUS_SURFACE_TYPE_MISMATCH,
  CAIRO_STATUS_PATTERN_TYPE_MISMATCH,
  CAIRO_STATUS_INVALID_CONTENT,
  CAIRO_STATUS_INVALID_FORMAT,
  CAIRO_STATUS_INVALID_VISUAL,
  CAIRO_STATUS_FILE_NOT_FOUND,
  CAIRO_STATUS_INVALID_DASH,
  CAIRO_STATUS_INVALID_DSC_COMMENT,
  CAIRO_STATUS_INVALID_INDEX,
  CAIRO_STATUS_CLIP_NOT_REPRESENTABLE,
  CAIRO_STATUS_TEMP_FILE_ERROR,
  CAIRO_STATUS_INVALID_STRIDE,
  CAIRO_STATUS_FONT_TYPE_MISMATCH,
  CAIRO_STATUS_USER_FONT_IMMUTABLE,
  CAIRO_STATUS_USER_FONT_ERROR,
  CAIRO_STATUS_NEGATIVE_COUNT,
  CAIRO_STATUS_INVALID_CLUSTERS,
  CAIRO_STATUS_INVALID_SLANT,
  CAIRO_STATUS_INVALID_WEIGHT,
  CAIRO_STATUS_INVALID_SIZE,
  CAIRO_STATUS_USER_FONT_NOT_IMPLEMENTED,
  CAIRO_STATUS_DEVICE_TYPE_MISMATCH,
  CAIRO_STATUS_DEVICE_ERROR,
  CAIRO_STATUS_INVALID_MESH_CONSTRUCTION,
  CAIRO_STATUS_DEVICE_FINISHED,
  CAIRO_STATUS_JBIG2_GLOBAL_MISSING,
}
export enum Content {
  CAIRO_CONTENT_COLOR,
  CAIRO_CONTENT_ALPHA,
  CAIRO_CONTENT_COLOR_ALPHA,
}
export enum Operator {
  CAIRO_OPERATOR_CLEAR,
  CAIRO_OPERATOR_SOURCE,
  CAIRO_OPERATOR_OVER,
  CAIRO_OPERATOR_IN,
  CAIRO_OPERATOR_OUT,
  CAIRO_OPERATOR_ATOP,
  CAIRO_OPERATOR_DEST,
  CAIRO_OPERATOR_DEST_OVER,
  CAIRO_OPERATOR_DEST_IN,
  CAIRO_OPERATOR_DEST_OUT,
  CAIRO_OPERATOR_DEST_ATOP,
  CAIRO_OPERATOR_XOR,
  CAIRO_OPERATOR_ADD,
  CAIRO_OPERATOR_SATURATE,
  CAIRO_OPERATOR_MULTIPLY,
  CAIRO_OPERATOR_SCREEN,
  CAIRO_OPERATOR_OVERLAY,
  CAIRO_OPERATOR_DARKEN,
  CAIRO_OPERATOR_LIGHTEN,
  CAIRO_OPERATOR_COLOR_DODGE,
  CAIRO_OPERATOR_COLOR_BURN,
  CAIRO_OPERATOR_HARD_LIGHT,
  CAIRO_OPERATOR_SOFT_LIGHT,
  CAIRO_OPERATOR_DIFFERENCE,
  CAIRO_OPERATOR_EXCLUSION,
  CAIRO_OPERATOR_HSL_HUE,
  CAIRO_OPERATOR_HSL_SATURATION,
  CAIRO_OPERATOR_HSL_COLOR,
  CAIRO_OPERATOR_HSL_LUMINOSITY,
}
export enum Antialias {
  CAIRO_ANTIALIAS_DEFAULT,
  CAIRO_ANTIALIAS_NONE,
  CAIRO_ANTIALIAS_GRAY,
  CAIRO_ANTIALIAS_SUBPIXEL,
  CAIRO_ANTIALIAS_FAST,
  CAIRO_ANTIALIAS_GOOD,
  CAIRO_ANTIALIAS_BEST,
}
export enum FillRule {
  CAIRO_FILL_RULE_WINDING,
  CAIRO_FILL_RULE_EVEN_ODD,
}
export enum LineCap {
  CAIRO_LINE_CAP_BUTT,
  CAIRO_LINE_CAP_ROUND,
  CAIRO_LINE_CAP_SQUARE,
}
export enum LineJoin {
  CAIRO_LINE_JOIN_MITER,
  CAIRO_LINE_JOIN_ROUND,
  CAIRO_LINE_JOIN_BEVEL,
}
export enum TextClusterFlags {
  CAIRO_TEXT_CLUSTER_FLAG_BACKWARD,
}
export enum FontSlant {
  CAIRO_FONT_SLANT_NORMAL,
  CAIRO_FONT_SLANT_ITALIC,
  CAIRO_FONT_SLANT_OBLIQUE,
}
export enum FontWeight {
  CAIRO_FONT_WEIGHT_NORMAL,
  CAIRO_FONT_WEIGHT_BOLD,
}
export enum SubpixelOrder {
  CAIRO_SUBPIXEL_ORDER_DEFAULT,
  CAIRO_SUBPIXEL_ORDER_RGB,
  CAIRO_SUBPIXEL_ORDER_BGR,
  CAIRO_SUBPIXEL_ORDER_VRGB,
  CAIRO_SUBPIXEL_ORDER_VBGR,
}
export enum HintStyle {
  CAIRO_HINT_STYLE_DEFAULT,
  CAIRO_HINT_STYLE_NONE,
  CAIRO_HINT_STYLE_SLIGHT,
  CAIRO_HINT_STYLE_MEDIUM,
  CAIRO_HINT_STYLE_FULL,
}
export enum HintMetrics {
  CAIRO_HINT_METRICS_DEFAULT,
  CAIRO_HINT_METRICS_OFF,
  CAIRO_HINT_METRICS_ON,
}
export enum FontType {
  CAIRO_FONT_TYPE_TOY,
  CAIRO_FONT_TYPE_FT,
  CAIRO_FONT_TYPE_WIN32,
  CAIRO_FONT_TYPE_QUARTZ,
  CAIRO_FONT_TYPE_USER,
}
export enum PathDataType {
  CAIRO_PATH_MOVE_TO,
  CAIRO_PATH_LINE_TO,
  CAIRO_PATH_CURVE_TO,
  CAIRO_PATH_CLOSE_PATH,
}
export enum DeviceType {
  CAIRO_DEVICE_TYPE_DRM,
  CAIRO_DEVICE_TYPE_GL,
  CAIRO_DEVICE_TYPE_SCRIPT,
  CAIRO_DEVICE_TYPE_XCB,
  CAIRO_DEVICE_TYPE_XLIB,
  CAIRO_DEVICE_TYPE_XML,
  CAIRO_DEVICE_TYPE_COGL,
  CAIRO_DEVICE_TYPE_WIN32,
  CAIRO_DEVICE_TYPE_INVALID,
}
export enum SurfaceType {
  CAIRO_SURFACE_TYPE_IMAGE,
  CAIRO_SURFACE_TYPE_PDF,
  CAIRO_SURFACE_TYPE_PS,
  CAIRO_SURFACE_TYPE_XLIB,
  CAIRO_SURFACE_TYPE_XCB,
  CAIRO_SURFACE_TYPE_GLITZ,
  CAIRO_SURFACE_TYPE_QUARTZ,
  CAIRO_SURFACE_TYPE_WIN32,
  CAIRO_SURFACE_TYPE_BEOS,
  CAIRO_SURFACE_TYPE_DIRECTFB,
  CAIRO_SURFACE_TYPE_SVG,
  CAIRO_SURFACE_TYPE_OS2,
  CAIRO_SURFACE_TYPE_WIN32_PRINTING,
  CAIRO_SURFACE_TYPE_QUARTZ_IMAGE,
  CAIRO_SURFACE_TYPE_SCRIPT,
  CAIRO_SURFACE_TYPE_QT,
  CAIRO_SURFACE_TYPE_RECORDING,
  CAIRO_SURFACE_TYPE_VG,
  CAIRO_SURFACE_TYPE_GL,
  CAIRO_SURFACE_TYPE_DRM,
  CAIRO_SURFACE_TYPE_TEE,
  CAIRO_SURFACE_TYPE_XML,
  CAIRO_SURFACE_TYPE_SKIA,
  CAIRO_SURFACE_TYPE_SUBSURFACE,
  CAIRO_SURFACE_TYPE_COGL,
}
export enum Format {
  CAIRO_FORMAT_INVALID,
  CAIRO_FORMAT_ARGB32,
  CAIRO_FORMAT_RGB24,
  CAIRO_FORMAT_A8,
  CAIRO_FORMAT_A1,
  CAIRO_FORMAT_RGB16_565,
  CAIRO_FORMAT_RGB30,
}
export enum PatternType {
  CAIRO_PATTERN_TYPE_SOLID,
  CAIRO_PATTERN_TYPE_SURFACE,
  CAIRO_PATTERN_TYPE_LINEAR,
  CAIRO_PATTERN_TYPE_RADIAL,
  CAIRO_PATTERN_TYPE_MESH,
  CAIRO_PATTERN_TYPE_RASTER_SOURCE,
}
export enum Extend {
  CAIRO_EXTEND_NONE,
  CAIRO_EXTEND_REPEAT,
  CAIRO_EXTEND_REFLECT,
  CAIRO_EXTEND_PAD,
}
export enum Filter {
  CAIRO_FILTER_FAST,
  CAIRO_FILTER_GOOD,
  CAIRO_FILTER_BEST,
  CAIRO_FILTER_NEAREST,
  CAIRO_FILTER_BILINEAR,
  CAIRO_FILTER_GAUSSIAN,
}
export enum RegionOverlap {
  CAIRO_REGION_OVERLAP_IN,
  CAIRO_REGION_OVERLAP_OUT,
  CAIRO_REGION_OVERLAP_PART,
}
export class Context {}
export class Device {}
export class Surface {}
export class Matrix {}
export class Pattern {}
export class Region {}
export class FontOptions {}
export class FontFace {}
export class ScaledFont {}
export class Path {}
export class Rectangle {
  static x: number;
  static y: number;
  static width: number;
  static height: number;
}
export class RectangleInt {
  static x: number;
  static y: number;
  static width: number;
  static height: number;
}
export function image_surface_create(): void;