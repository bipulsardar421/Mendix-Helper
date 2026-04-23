const _ICON_URLS = [
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245803/zip_575_zip_rh2sdm.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245803/z_11983_from-a-to-z_c15qjj.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245802/xml_106090_xml_kswmyf.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245801/xlsx_171200_xlsx_rsooc9.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245801/wps_104552_wps_pw9d4t.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245801/xls_245606_xls_klshrl.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245801/xhtml_35957_xhtml-open-file-format_gzchwu.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245800/wmv_199833_wmv_uzhzjm.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245800/wma_70141_wma-file_siv8ru.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245800/war_167838_no-war_mrr7g8.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245800/wav_28053_wav_b7wnct.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245800/vcf_27329_vcf_grfgqm.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245799/url_19461_url-link_tkeaa1.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245799/txt_5038_txt_jx6ejo.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245799/twig_80853_shield-with-twig_isdo3l.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245798/tiff_5479_tiff_qadgry.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245798/ttf_44643_ttf-open-file-format_nk6hfi.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245798/torrent_135438_torrent-file-format-symbol_yqdovt.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245798/tif_199855_tif_msqy5g.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245797/tex_138674_tex_gpp8nh.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245797/tar_77883_tar_abi1ow.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245797/sys_17852_sys_siepdq.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245797/swift_48269_swift-bird-shape_tgow1m.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245796/swf_27328_swf_ljwli2.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245796/svg_213850_svg_or5qoi.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245796/srt_17893_srt-file-format-symbol_r3mfsn.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245796/sql_120229_sql_xxfgkp.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245795/sketch_31686_sketch_dmvtj1.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245795/sdf_17849_sdf_eepnjm.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245795/sea_497_sea_pulvbc.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245795/sav_108394_sav-open-file-variant_wtedwp.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245794/rtf_26394_rtf_lbnem3.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245794/rpm_62815_rpm-file-format-symbol_wliwal.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245793/rom_84209_dvd-rom-logotype_cryab3.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245793/raw_163245_raw_yiwdkm.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245793/rm_172345_rm-file-format_qus0t0.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245793/rar_56264_rar_rev5xb.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245792/pub_268716_pub_xaec9w.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245792/py_64751_py-file-format-symbol_j5hkfe.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245792/psd_6346_psd_ydvp06.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245791/ps_17509_ps_rh2o6n.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245791/pptx_237852_pptx_wmqtbq.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245791/ppt_48628_ppt_xvm4xk.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245790/pps_124890_pps_wjr9qy.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245790/pm_153726_square-clock-with-pm-label_tpcobv.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245790/pot_16120_pot_cuqqcn.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245790/pkg_19128_pkg-open-file-format_xzsbxu.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245790/png_214101_png_exaog8.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245790/pl_17848_pl_mlritf.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245789/php_221337_php_bor2lu.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245788/pdf_63087_pdf_t2srcn.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245788/part_39763_neck-part_viz3tb.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245788/pdb_17846_pdb_xkhd5c.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245788/patch_28548_patch_oreyk1.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245787/ogg_199825_ogg_smsnhd.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245787/pages_92312_pages_vuzmbp.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245787/otf_161283_otf-file_nukzeq.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245786/odt_172086_odt-file-format_llv0yn.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245786/ods_27327_ods_a0jwig.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245785/numbers_118612_pad-numbers_dwjkov.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245785/obj_27326_obj_ibizib.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245785/odp_43938_odp-file-format-symbol_bpcyiv.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245785/o_151728_sign-lenguage-o_ia4onv.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245784/nef_199851_nef_t0zk2x.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245784/nes_11711_nes-file-variant_jur9lj.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245784/mustache_57158_mustache_k9ixdi.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245784/msi_530_msi-file-format-symbol_yko27j.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245783/mpg_116399_mpg_bzm6qo.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245783/msg_173231_msg-file-format-symbol_p2p3fv.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245783/mpeg_56265_mpeg_oiqdr7.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245782/mpa_152860_mpa-open-file-format_sfi0cn.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245782/mp3_8679_mp3_h8evg9.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245782/mp4_4511_mp4_fzpgng.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245781/mod_6096_mod-avatar_dsptlr.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245781/mov_96383_mov_emc7v3.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245781/mkv_70404_mkv_zukdbr.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245781/midi_56291_midi-plug-connector-for-musical-electronic-instruments_jp2mgx.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245780/mid_199835_mid_ezzjol.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245780/me_75980_marry-me_cmju1e.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245780/mdf_78280_mdf-icon-format_hngxa6.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245779/md_60561_md_wogfog.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245779/mdb_199821_mdb_grdrh4.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245779/m4v_7753_m4v-file-format-symbol_fa2buc.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245779/m4a_18503_m4a-file-format-symbol_nkay0k.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245778/lua_139311_lua-file-format-symbol_d9mx8v.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245778/log_166445_log_pmoprv.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245777/less_210593_is-less-than_vxn119.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245777/lnk_142776_lnk-file-format-symbol_fuvy1o.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245777/latex_195089_glove-latex_nnsovt.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245777/license_77_license_g317mw.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245776/kmz_41482_kmz-file-format-symbol_ynf7pa.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245776/kml_158088_kml-file-format-interface_rfcmyf.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245776/key_17905_key_nuyqth.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245776/jsp_142781_jsp-file-format-symbol_sxtc6g.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245776/jsx_221324_jsx_vfq7vd.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245775/json_8901_json-file_ftjopq.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245774/js_199826_js_exgg2c.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245774/jpg_5589_jpg_ges9g2.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245774/java_146177_java_vy8wop.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245774/jpeg_42468_jpeg_hfrllc.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245773/iso_270174_iso_phejnb.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245773/jar_1789_jar_cxzbkn.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245773/ipa_38439_ipa-file_ukvjh6.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245772/indd_192127_indd_nd9uhq.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245772/ini_119308_ini_xfw8tx.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245772/iff_12397_iff-file-format-symbol_gmlhlc.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245771/ico_87176_ico_gt4teh.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245771/html_4796_html_rwhdx6.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245771/htm_199843_htm_nddot0.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245770/go_28585_go_i3s0jh.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245770/h_31229_sign-lenguage-h_fk529j.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245770/gz_98589_gz-file-format-symbol_bywnws.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245769/for_109559_for-sale_p8amdn.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245769/gif_76307_gif_q2wjcw.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245769/ged_104548_ged_lopda2.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245769/gadget_248135_gadget_zkiuoh.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245768/fon_163394_fon-open-file-format_txkuns.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245768/flv_30196_flv_i9vzyb.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245767/fig_75756_fig_ncj4wq.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245767/flac_116396_flac_izmhwk.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245767/eps_10384_eps_ezspyg.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245767/exe_110411_exe_r2ynzx.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245766/eml_199865_eml_tqsl9k.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245766/ear_8350_ear_atb51v.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245766/dwg_60485_dwg_vweqfp.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245765/dot_35641_dot_asmkbn.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245765/docx_119309_docx_rq4gtc.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245765/dtd_173230_dtd-file-format-symbol_uedv6s.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245765/doc_234397_doc_cso4ad.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245764/dmg_4401_dmg-format_q9y1zt.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245764/dll_28050_dll_qz76sl.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245764/db_17507_db_pmoxqo.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245764/dbf_69424_dbf_hwscwz.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245764/dat_114817_dat_u47ypu.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245763/dart_160806_dart_adaeqm.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245762/cue_104546_cue_mqynon.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245762/cur_37947_cur-file-format_m1b2zk.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245762/csv_8839_csv_aovqli.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245761/css_21691_css_enbrfk.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245760/cr2_199873_cr2_qwcxac.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245760/cpp_104545_cpp_zgapuy.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245760/com_199846_com_vsxq0v.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245759/class_99365_class_decmju.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245759/coffee_31791_coffee_f1agoy.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245759/cgi_27325_cgi_kpnguq.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245758/cfm_154434_cfm-file-format-symbol_m0t4t0.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245758/cfg_102929_cfg-open-file-format_swqmwd.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245758/cer_47482_cer-file-format_v1m6g8.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245758/cdr_69191_cdr_od5kin.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245757/cap_100928_cap_ohhixi.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245757/cab_7152_cab_tomrcc.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245756/bmp_75324_bmp_mr2h5o.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245756/c_126866_c-document_qsqwuu.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245755/bin_123141_bin_modzwa.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245755/blend_11778_blend_abfed0.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245755/bat_79701_bat_ls1abc.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245754/bak_199840_bak-files-and-folders_e8jb74.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245754/avi_8121_avi_km5qwx.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245754/au_256772_au_rvavlv.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245753/aspx_15078_aspx-file-format-symbol_ohhev1.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245752/asp_72382_asp_kj5yq5.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245752/ai_82052_ai_so7z3k.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245752/ar_144943_ar-wand_kj6xrq.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245752/aac_96694_aac-file-format-variant_n9rcpw.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245752/asf_176219_asf-file-format-symbol_ctx4cm.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245752/7z_126703_7z_jfbk6j.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245750/apk_87175_apk_r9zvxn.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245750/3g2_39223_3g2-file-format_u24c8y.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245750/3dm_66169_3dm-file-format-symbol_v9iwt9.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245750/aif_67152_aif-file-symbol_pv0hzp.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245750/3ds_132334_3ds_dtkbsl.svg",
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776245750/3gp_117081_3gp_tswjyg.svg",
];
const _FOLDER_ICON =
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776248427/folders-svgrepo-com_ajk5cz.svg";
const _CONTAINER_ICON =
  "https://res.cloudinary.com/dfjaa0eip/image/upload/v1776248427/container-3-svgrepo-com_ookkkh.svg";
const _EXT_MAP = {
  zip: _ICON_URLS[0],
  xml: _ICON_URLS[2],
  xlsx: _ICON_URLS[3],
  wps: _ICON_URLS[4],
  xls: _ICON_URLS[5],
  xhtml: _ICON_URLS[6],
  wmv: _ICON_URLS[7],
  wma: _ICON_URLS[8],
  wav: _ICON_URLS[10],
  vcf: _ICON_URLS[11],
  url: _ICON_URLS[12],
  txt: _ICON_URLS[13],
  tiff: _ICON_URLS[15],
  ttf: _ICON_URLS[16],
  tif: _ICON_URLS[18],
  tex: _ICON_URLS[19],
  tar: _ICON_URLS[20],
  sys: _ICON_URLS[21],
  swift: _ICON_URLS[22],
  swf: _ICON_URLS[23],
  svg: _ICON_URLS[24],
  srt: _ICON_URLS[25],
  sql: _ICON_URLS[26],
  sketch: _ICON_URLS[27],
  sav: _ICON_URLS[30],
  rtf: _ICON_URLS[31],
  rpm: _ICON_URLS[32],
  raw: _ICON_URLS[34],
  rar: _ICON_URLS[36],
  pub: _ICON_URLS[37],
  py: _ICON_URLS[38],
  psd: _ICON_URLS[39],
  ps: _ICON_URLS[40],
  pptx: _ICON_URLS[41],
  ppt: _ICON_URLS[42],
  pps: _ICON_URLS[43],
  pot: _ICON_URLS[45],
  pkg: _ICON_URLS[46],
  png: _ICON_URLS[47],
  php: _ICON_URLS[49],
  pdf: _ICON_URLS[50],
  pdb: _ICON_URLS[52],
  patch: _ICON_URLS[53],
  ogg: _ICON_URLS[54],
  otf: _ICON_URLS[56],
  odt: _ICON_URLS[57],
  ods: _ICON_URLS[58],
  obj: _ICON_URLS[60],
  odp: _ICON_URLS[61],
  nef: _ICON_URLS[63],
  msi: _ICON_URLS[66],
  mpg: _ICON_URLS[67],
  msg: _ICON_URLS[68],
  mpeg: _ICON_URLS[69],
  mp3: _ICON_URLS[71],
  mp4: _ICON_URLS[72],
  mov: _ICON_URLS[74],
  mkv: _ICON_URLS[75],
  mid: _ICON_URLS[77],
  mdf: _ICON_URLS[79],
  md: _ICON_URLS[80],
  mdb: _ICON_URLS[81],
  m4v: _ICON_URLS[82],
  m4a: _ICON_URLS[83],
  lua: _ICON_URLS[84],
  log: _ICON_URLS[85],
  less: _ICON_URLS[86],
  lnk: _ICON_URLS[87],
  kmz: _ICON_URLS[90],
  kml: _ICON_URLS[91],
  key: _ICON_URLS[92],
  jsp: _ICON_URLS[93],
  jsx: _ICON_URLS[94],
  json: _ICON_URLS[95],
  js: _ICON_URLS[96],
  jpg: _ICON_URLS[97],
  java: _ICON_URLS[98],
  jpeg: _ICON_URLS[99],
  iso: _ICON_URLS[100],
  jar: _ICON_URLS[101],
  ipa: _ICON_URLS[102],
  indd: _ICON_URLS[103],
  ini: _ICON_URLS[104],
  ico: _ICON_URLS[106],
  html: _ICON_URLS[107],
  htm: _ICON_URLS[108],
  go: _ICON_URLS[109],
  gz: _ICON_URLS[111],
  gif: _ICON_URLS[113],
  flv: _ICON_URLS[117],
  flac: _ICON_URLS[119],
  eps: _ICON_URLS[120],
  exe: _ICON_URLS[121],
  eml: _ICON_URLS[122],
  dwg: _ICON_URLS[124],
  docx: _ICON_URLS[126],
  doc: _ICON_URLS[128],
  dmg: _ICON_URLS[129],
  dll: _ICON_URLS[130],
  db: _ICON_URLS[131],
  dbf: _ICON_URLS[132],
  dat: _ICON_URLS[133],
  dart: _ICON_URLS[134],
  csv: _ICON_URLS[137],
  css: _ICON_URLS[138],
  cpp: _ICON_URLS[140],
  class: _ICON_URLS[142],
  cfg: _ICON_URLS[146],
  cer: _ICON_URLS[147],
  cdr: _ICON_URLS[148],
  bmp: _ICON_URLS[151],
  c: _ICON_URLS[152],
  bin: _ICON_URLS[153],
  bat: _ICON_URLS[155],
  avi: _ICON_URLS[157],
  aac: _ICON_URLS[163],
  asf: _ICON_URLS[164],
  "7z": _ICON_URLS[165],
  apk: _ICON_URLS[166],
  "3gp": _ICON_URLS[171],
  aif: _ICON_URLS[169],
};
function _getIconSrc(item) {
  if (item.type === "container") return _CONTAINER_ICON;
  if (item.type === "directory") return _FOLDER_ICON;
  const p = (item.name || "").split(".");
  return p.length < 2
    ? _ICON_URLS[13]
    : _EXT_MAP[p[p.length - 1].toLowerCase()] || _ICON_URLS[13];
}
function _ensureStyle() {
  if (document.head.querySelector("#dgr-style")) return;
  const s = document.createElement("style");
  s.id = "dgr-style";
  s.textContent =
    ".dgr{font-family:'Segoe UI',Arial,sans-serif;font-size:13px;background:#f3f3f3;color:#1a1a1a;border-radius:6px;overflow:hidden;display:flex;flex-direction:column;min-height:340px;border:1px solid #c8c8c8}.dgr-toolbar{display:flex;align-items:center;gap:6px;padding:6px 10px;background:#e8e8e8;border-bottom:1px solid #c8c8c8;flex-shrink:0}.dgr-toolbar span{font-size:11px;color:#666;margin-right:2px}.dgr-btn{display:flex;align-items:center;gap:5px;padding:4px 11px;border-radius:4px;border:1px solid #c8c8c8;background:#fff;color:#1a1a1a;font-size:12px;cursor:pointer;transition:background .15s,border-color .15s;outline:none}.dgr-btn:hover{background:#ddeeff;border-color:#0078d4}.dgr-btn.active{background:#0078d4;border-color:#005a9e;color:#fff}.dgr-breadcrumb{display:flex;align-items:center;gap:3px;padding:4px 10px;background:#f0f0f0;border-bottom:1px solid #d0d0d0;font-size:12px;flex-shrink:0}.dgr-bc-seg{color:#0078d4;cursor:pointer}.dgr-bc-seg:hover{text-decoration:underline}.dgr-bc-sep{color:#999}.dgr-body{display:flex;flex:1;overflow:hidden}.dgr-tree{width:210px;min-width:140px;border-right:1px solid #d0d0d0;overflow-y:auto;padding:4px 0;flex-shrink:0;background:#fafafa}.dgr-content{flex:1;overflow-y:auto;padding:8px;background:#fff}.dgr-tn{display:flex;align-items:center;gap:4px;padding:3px 6px;cursor:pointer;user-select:none;border-radius:3px;margin:1px 4px;transition:background .12s;white-space:nowrap}.dgr-tn:hover{background:#e5f2ff}.dgr-tn.sel{background:#cce4ff;color:#003a75}.dgr-tn img{width:15px;height:15px;object-fit:contain;flex-shrink:0}.dgr-tn .cv{width:11px;font-size:9px;color:#888;flex-shrink:0}.dgr-tch{padding-left:14px;border-left:1px solid #ddd;margin-left:11px}.dgr-tbl{width:100%;border-collapse:collapse}.dgr-tbl thead tr{border-bottom:1px solid #d0d0d0}.dgr-tbl th{text-align:left;padding:4px 8px;color:#555;font-weight:600;font-size:11px;letter-spacing:.4px;white-space:nowrap;background:#f5f5f5}.dgr-tbl td{padding:3px 8px;border-radius:3px;white-space:nowrap;color:#1a1a1a}.dgr-row:hover td{background:#e5f2ff;cursor:pointer}.dgr-row td.dgr-nm{display:flex;align-items:center;gap:7px}.dgr-row td img{width:16px;height:16px;object-fit:contain}.dgr-large{display:flex;flex-wrap:wrap;gap:12px;padding:4px;align-content:flex-start}.dgr-li{display:flex;flex-direction:column;align-items:center;width:88px;padding:8px 4px;border-radius:5px;cursor:pointer;user-select:none;transition:background .12s;position:relative}.dgr-li:hover{background:#ddeeff}.dgr-li img{width:48px;height:48px;object-fit:contain}.dgr-li span{font-size:11px;text-align:center;margin-top:5px;word-break:break-word;color:#1a1a1a;max-width:84px;line-height:1.3}.dgr-tip{position:fixed;z-index:99999;background:#1e1e2e;color:#cdd6f4;font-size:11px;padding:8px 10px;border-radius:6px;box-shadow:0 4px 16px rgba(0,0,0,.35);pointer-events:none;white-space:nowrap;max-width:320px;line-height:1.6;border:1px solid #313244}.dgr-tip-row{display:flex;gap:6px}.dgr-tip-lbl{color:#89b4fa;font-weight:600;min-width:80px}.dgr-tip-val{color:#cdd6f4;overflow:hidden;text-overflow:ellipsis;max-width:200px}.dgr-dot-wrap{position:relative;margin-left:auto}.dgr-dot-btn{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:4px;border:1px solid transparent;background:transparent;cursor:pointer;font-size:16px;color:#444;letter-spacing:1px;transition:background .15s,border-color .15s;outline:none;padding:0}.dgr-dot-btn:hover{background:#ddeeff;border-color:#0078d4}.dgr-dot-menu{display:none;position:absolute;right:0;top:32px;background:#fff;border:1px solid #c8c8c8;border-radius:6px;box-shadow:0 4px 18px rgba(0,0,0,.18);z-index:10000;min-width:190px;padding:4px 0}.dgr-dot-menu.open{display:block}.dgr-dot-sep{height:1px;background:#e0e0e0;margin:4px 0}.dgr-dot-item{display:flex;align-items:center;gap:8px;padding:7px 16px;font-size:12px;color:#1a1a1a;cursor:pointer;transition:background .12s;white-space:nowrap;border:none;background:transparent;width:100%;text-align:left}.dgr-dot-item:hover{background:#e5f2ff;color:#0078d4}.dgr-dot-item svg{flex-shrink:0}.dgr-ctx{position:fixed;z-index:100000;background:#fff;border:1px solid #c8c8c8;border-radius:7px;box-shadow:0 6px 24px rgba(0,0,0,.18);min-width:200px;padding:5px 0;font-family:'Segoe UI',Arial,sans-serif;font-size:12px}.dgr-ctx-hdr{padding:5px 14px 4px;font-size:10px;font-weight:700;color:#888;letter-spacing:.6px;text-transform:uppercase;border-bottom:1px solid #f0f0f0;margin-bottom:3px}.dgr-ctx-item{display:flex;align-items:center;gap:9px;padding:7px 16px;color:#1a1a1a;cursor:pointer;transition:background .12s;border:none;background:transparent;width:100%;text-align:left;font-size:12px}.dgr-ctx-item:hover{background:#e5f2ff;color:#0078d4}.dgr-ctx-item.danger:hover{background:#fff0f0;color:#c0392b}.dgr-ctx-sep{height:1px;background:#ebebeb;margin:4px 0}";
  document.head.appendChild(s);
}
function _typeLabel(it) {
  if (it.type === "container") return "Container";
  if (it.type === "directory") return "File Folder";
  const p = (it.name || "").split(".");
  return p.length > 1 ? p[p.length - 1].toUpperCase() + " File" : "File";
}
function _getChildren(item) {
  return [].concat(item.directories || [], item.files || item._files || []);
}
function _resolveEnum(key) {
  return key;
}
function _act_Refresh(mf){
  if (mf) mf(_resolveEnum("Refresh"));
}
function _act_ViewDirectory(mf) {
  if (mf) mf(_resolveEnum("View_Directory"));
}
function _act_CreateDirectory(mf) {
  if (mf) mf(_resolveEnum("Create_Directory"));
}
function _act_RenameDirectory(mf) {
  if (mf) mf(_resolveEnum("Rename_Directory"));
}
function _act_DeleteDirectory(mf) {
  if (mf) mf(_resolveEnum("Delete_Directory"));
}
function _act_ListFolders(mf) {
  if (mf) mf(_resolveEnum("List_Folders"));
}
function _act_CreateFolder(mf) {
  if (mf) mf(_resolveEnum("Create_Folder"));
}
function _act_RenameFolder(mf) {
  if (mf) mf(_resolveEnum("Rename_Folder"));
}
function _act_DeleteFolder(mf) {
  if (mf) mf(_resolveEnum("Delete_Folder"));
}
function _act_UploadFile(mf) {
  if (mf) mf(_resolveEnum("Upload_File"));
}
function _act_DeleteFile(mf) {
  if (mf) mf(_resolveEnum("Delete_File"));
}
function _buildDirExplorer(data, root, savedPath, lsPathKey, mainAction) {
  _ensureStyle();
  var currentView = "details",
    currentNode = null,
    currentPath = [],
    idSeq = 0,
    _currentData = data;
  var wrap = document.createElement("div");
  wrap.className = "dgr";
  var toolbar = document.createElement("div");
  toolbar.className = "dgr-toolbar";
  toolbar.innerHTML = "<span>View:</span>";
  var btnD = document.createElement("button");
  btnD.className = "dgr-btn active";
  btnD.id = "dgr-btn-d";
  btnD.innerHTML =
    '<svg width="13" height="13" viewBox="0 0 14 14" fill="currentColor"><rect x="0" y="0" width="14" height="3" rx="1"/><rect x="0" y="5.5" width="14" height="3" rx="1"/><rect x="0" y="11" width="14" height="3" rx="1"/></svg> Details';
  var btnL = document.createElement("button");
  btnL.className = "dgr-btn";
  btnL.id = "dgr-btn-l";
  btnL.innerHTML =
    '<svg width="13" height="13" viewBox="0 0 14 14" fill="currentColor"><rect x="0" y="0" width="6" height="6" rx="1"/><rect x="8" y="0" width="6" height="6" rx="1"/><rect x="0" y="8" width="6" height="6" rx="1"/><rect x="8" y="8" width="6" height="6" rx="1"/></svg> Large Icons';
  toolbar.appendChild(btnD);
  toolbar.appendChild(btnL);
  var dotWrap = document.createElement("div");
  dotWrap.className = "dgr-dot-wrap";
  var dotBtn = document.createElement("button");
  dotBtn.className = "dgr-dot-btn";
  dotBtn.title = "Actions";
  dotBtn.innerHTML = "&#8942;";
  var dotMenu = document.createElement("div");
  dotMenu.className = "dgr-dot-menu";
  var _menuItems = [
    {
      label: "View Directory",
      icon: "&#128065;",
      fn: function() {
        _act_ViewDirectory(mainAction);
      },
    },
    {
      label: "Create Directory",
      icon: "&#128193;",
      fn: function() {
        _act_CreateDirectory(mainAction);
      },
    },
    {
      label: "Rename Directory",
      icon: "&#9998;",
      fn: function() {
        _act_RenameDirectory(mainAction);
      },
    },
    {
      label: "Delete Directory",
      icon: "&#128465;",
      fn: function() {
        _act_DeleteDirectory(mainAction);
      },
    },
    null,
    {
      label: "List Folders",
      icon: "&#128196;",
      fn: function() {
        _act_ListFolders(mainAction);
      },
    },
    {
      label: "Create Folder",
      icon: "&#128194;",
      fn: function() {
        _act_CreateFolder(mainAction);
      },
    },
    {
      label: "Rename Folder",
      icon: "&#9999;",
      fn: function() {
        _act_RenameFolder(mainAction);
      },
    },
    {
      label: "Delete Folder",
      icon: "&#128465;",
      fn: function() {
        _act_DeleteFolder(mainAction);
      },
    },
    null,
    {
      label: "Upload File",
      icon: "&#128228;",
      fn: function() {
        _act_UploadFile(mainAction);
      },
    },
    {
      label: "Delete File",
      icon: "&#128465;",
      fn: function() {
        _act_DeleteFile(mainAction);
      },
    },
  ];

  var _EmptySpaceMenuItems = [
    {
      label: "Refresh",
      icon: "&#128472;",
      fn: function() {
        _act_Refresh(mainAction);
      },
    },
    {
      label: "View Directory",
      icon: "&#128065;",
      fn: function() {
        _act_ViewDirectory(mainAction);
      },
    },
    {
      label: "Create Directory",
      icon: "&#128193;",
      fn: function() {
        _act_CreateDirectory(mainAction);
      },
    },
    {
      label: "Rename Directory",
      icon: "&#9998;",
      fn: function() {
        _act_RenameDirectory(mainAction);
      },
    },
    {
      label: "Delete Directory",
      icon: "&#128465;",
      fn: function() {
        _act_DeleteDirectory(mainAction);
      },
    },
    null,
    {
      label: "List Folders",
      icon: "&#128196;",
      fn: function() {
        _act_ListFolders(mainAction);
      },
    },
    {
      label: "Create Folder",
      icon: "&#128194;",
      fn: function() {
        _act_CreateFolder(mainAction);
      },
    },
    {
      label: "Rename Folder",
      icon: "&#9999;",
      fn: function() {
        _act_RenameFolder(mainAction);
      },
    },
    {
      label: "Delete Folder",
      icon: "&#128465;",
      fn: function() {
        _act_DeleteFolder(mainAction);
      },
    },
    null,
    {
      label: "Upload File",
      icon: "&#128228;",
      fn: function() {
        _act_UploadFile(mainAction);
      },
    },
    {
      label: "Delete File",
      icon: "&#128465;",
      fn: function() {
        _act_DeleteFile(mainAction);
      },
    },
  ];
  for (var mi = 0; mi < _menuItems.length; mi++) {
    (function(item) {
      if (!item) {
        var sep = document.createElement("div");
        sep.className = "dgr-dot-sep";
        dotMenu.appendChild(sep);
        return;
      }
      var btn = document.createElement("button");
      btn.className = "dgr-dot-item";
      btn.innerHTML =
        "<span>" + item.icon + "</span><span>" + item.label + "</span>";
      btn.onclick = function() {
        dotMenu.classList.remove("open");
        item.fn();
      };
      dotMenu.appendChild(btn);
    })(_menuItems[mi]);
  }
  dotBtn.onclick = function(e) {
    e.stopPropagation();
    dotMenu.classList.toggle("open");
  };
  document.addEventListener("click", function() {
    dotMenu.classList.remove("open");
  });
  dotWrap.appendChild(dotBtn);
  dotWrap.appendChild(dotMenu);
  toolbar.appendChild(dotWrap);
  var breadcrumb = document.createElement("div");
  breadcrumb.className = "dgr-breadcrumb";
  var body = document.createElement("div");
  body.className = "dgr-body";
  var treeEl = document.createElement("div");
  treeEl.className = "dgr-tree";
  var contentEl = document.createElement("div");
  contentEl.className = "dgr-content";
  body.appendChild(treeEl);
  body.appendChild(contentEl);
  wrap.appendChild(toolbar);
  wrap.appendChild(breadcrumb);
  wrap.appendChild(body);
  root.appendChild(wrap);
  function renderBreadcrumb(path) {
    breadcrumb.innerHTML = "";
    for (var i = 0; i < path.length; i++) {
      (function(seg, snap) {
        var sp = document.createElement("span");
        sp.className = "dgr-bc-seg";
        sp.textContent = seg.name;
        sp.onclick = function() {
          currentPath.length = 0;
          for (var j = 0; j < snap.length; j++) currentPath.push(snap[j]);
          openNode(seg, snap);
        };
        breadcrumb.appendChild(sp);
        if (i < path.length - 1) {
          var sep = document.createElement("span");
          sep.className = "dgr-bc-sep";
          sep.textContent = " > ";
          breadcrumb.appendChild(sep);
        }
      })(path[i], path.slice(0, i + 1));
    }
  }
  function openNode(item, path) {
    currentNode = item;
    var nodes = treeEl.querySelectorAll(".dgr-tn");
    for (var i = 0; i < nodes.length; i++) nodes[i].classList.remove("sel");
    var sel = treeEl.querySelector("[data-id='" + item._id + "']");
    if (sel) sel.classList.add("sel");
    renderBreadcrumb(path);
    renderContent(item);
    if (lsPathKey) {
      var names = path.map(function(n) {
        return n.name;
      });
      localStorage.setItem(lsPathKey, JSON.stringify(names));
    }
  }
  function _formatSize(bytes) {
    if (!bytes && bytes !== 0) return "â€”";
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / 1048576).toFixed(2) + " MB";
  }
  function _showTooltip(e, it) {
    var tip = document.getElementById("dgr-global-tip");
    if (!tip) {
      tip = document.createElement("div");
      tip.id = "dgr-global-tip";
      tip.className = "dgr-tip";
      document.body.appendChild(tip);
    }
    var rows = [
      ["Name", it.name],
      ["Type", it.contentType || "â€”"],
      ["Size", _formatSize(it.size)],
      [
        "Modified",
        it.lastModified ? it.lastModified.replace("T", " ").slice(0, 19) : "â€”",
      ],
    ];
    if (it.metadata) {
      Object.keys(it.metadata).forEach(function(k) {
        rows.push([k, it.metadata[k]]);
      });
    }
    tip.innerHTML = rows
      .map(function(r) {
        return (
          '<div class="dgr-tip-row"><span class="dgr-tip-lbl">' +
          r[0] +
          '</span><span class="dgr-tip-val">' +
          (r[1] || "â€”") +
          "</span></div>"
        );
      })
      .join("");
    tip.style.display = "block";
    _positionTip(tip, e);
  }
  function _positionTip(tip, e) {
    var x = e.clientX + 14,
      y = e.clientY + 14;
    if (x + 340 > window.innerWidth) x = e.clientX - 344;
    if (y + tip.offsetHeight + 10 > window.innerHeight)
      y = e.clientY - tip.offsetHeight - 10;
    tip.style.left = x + "px";
    tip.style.top = y + "px";
  }
  function _hideTooltip() {
    var tip = document.getElementById("dgr-global-tip");
    if (tip) tip.style.display = "none";
  }
  function _hideContextMenu() {
    var old = document.getElementById("dgr-ctx-menu");
    if (old) old.parentNode.removeChild(old);
  }
  function _showContextMenu(e, it, mf) {
    e.preventDefault();
    e.stopPropagation();
    _hideContextMenu();
    _hideTooltip();
    var menu = document.createElement("div");
    menu.id = "dgr-ctx-menu";
    menu.className = "dgr-ctx";
    var hdr = document.createElement("div");
    hdr.className = "dgr-ctx-hdr";
    var items = [];
    if (!it) {
      hdr.textContent = "Options";
      items = _EmptySpaceMenuItems;
    } else if (it.type === "container") {
      hdr.textContent = "Container";
      items = [
        { icon: "\uD83D\uDC41", label: "View Directory", fn: function() { _act_ViewDirectory(mf); } },
        { icon: "\uD83D\uDCC1", label: "Create Directory", fn: function() { _act_CreateDirectory(mf); } },
        { icon: "\u270E", label: "Rename Directory", fn: function() { _act_RenameDirectory(mf); } },
        null,
        { icon: "\uD83D\uDDD1", label: "Delete Directory", fn: function() { _act_DeleteDirectory(mf); }, danger: true }
      ];
    } else if (it.type === "directory") {
      hdr.textContent = "Folder";
      items = [
        { icon: "\uD83D\uDCC4", label: "List Folders", fn: function() { _act_ListFolders(mf); } },
        { icon: "\uD83D\uDCC2", label: "Create Folder", fn: function() { _act_CreateFolder(mf); } },
        { icon: "\u270F", label: "Rename Folder", fn: function() { _act_RenameFolder(mf); } },
        null,
        { icon: "\uD83D\uDDD1", label: "Delete Folder", fn: function() { _act_DeleteFolder(mf); }, danger: true }
      ];
    } else {
      hdr.textContent = "File";
      items = [
        { icon: "\uD83D\uDCE4", label: "Upload File", fn: function() { _act_UploadFile(mf); } },
        null,
        { icon: "\uD83D\uDDD1", label: "Delete File", fn: function() { _act_DeleteFile(mf); }, danger: true }
      ];
    }
    menu.appendChild(hdr);
    for (var mi = 0; mi < items.length; mi++) {
      (function(item) {
        if (!item) {
          var sep = document.createElement("div"); sep.className = "dgr-ctx-sep"; menu.appendChild(sep); return;
        }
        var btn = document.createElement("button");
        btn.className = "dgr-ctx-item" + (item.danger ? " danger" : "");
        btn.innerHTML = "<span>" + item.icon + "</span><span>" + item.label + "</span>";
        btn.onclick = function() { _hideContextMenu(); item.fn(); };
        menu.appendChild(btn);
      })(items[mi]);
    }
    document.body.appendChild(menu);
    var x = e.clientX, y = e.clientY;
    if (x + 220 > window.innerWidth) x = window.innerWidth - 224;
    if (y + menu.offsetHeight + 10 > window.innerHeight) y = window.innerHeight - menu.offsetHeight - 10;
    menu.style.left = x + "px";
    menu.style.top = y + "px";
    var _dismiss = function() { _hideContextMenu(); document.removeEventListener("click", _dismiss); document.removeEventListener("contextmenu", _dismiss); };
    setTimeout(function() {
      document.addEventListener("click", _dismiss);
      document.addEventListener("contextmenu", _dismiss);
    }, 0);
  }
  function _attachFileHandlers(el, it) {
    if (it.type !== "file") return;
    el.onmouseenter = function(e) { _showTooltip(e, it); };
    el.onmousemove = function(e) {
      var tip = document.getElementById("dgr-global-tip");
      if (tip) _positionTip(tip, e);
    };
    el.onmouseleave = function() { _hideTooltip(); };
    el.oncontextmenu = function(e) { _showContextMenu(e, it, mainAction); };
    el.onclick = function(e) {
      e.stopPropagation();
      if (!it.url) return;
      var a = document.createElement("a");
      a.href = it.url;
      a.download = it.name;
      a.target = "_blank";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  }
  function renderContent(item) {
    contentEl.innerHTML = "";
    contentEl.oncontextmenu = function(e) { _showContextMenu(e, null, mainAction); };
    var kids = _getChildren(item);
    if (currentView === "details") {
      var tbl = document.createElement("table");
      tbl.className = "dgr-tbl";
      tbl.innerHTML =
        "<thead><tr><th>Name</th><th>Type</th><th>Size</th><th>Modified</th></tr></thead><tbody></tbody>";
      var tb = tbl.querySelector("tbody");
      for (var i = 0; i < kids.length; i++) {
        (function(it) {
          var tr = document.createElement("tr");
          tr.className = "dgr-row";
          var td1 = document.createElement("td");
          td1.className = "dgr-nm";
          var img = document.createElement("img");
          img.src = _getIconSrc(it);
          img.alt = "";
          var nm = document.createElement("span");
          nm.textContent = it.name;
          td1.appendChild(img);
          td1.appendChild(nm);
          var td2 = document.createElement("td");
          td2.style.color = "#565f89";
          td2.style.fontSize = "11px";
          td2.textContent = _typeLabel(it);
          var td3 = document.createElement("td");
          td3.style.color = "#565f89";
          td3.style.fontSize = "11px";
          td3.textContent = it.type === "file" ? _formatSize(it.size) : "";
          var td4 = document.createElement("td");
          td4.style.color = "#565f89";
          td4.style.fontSize = "11px";
          td4.textContent = it.lastModified
            ? it.lastModified.replace("T", " ").slice(0, 19)
            : "";
          tr.appendChild(td1);
          tr.appendChild(td2);
          tr.appendChild(td3);
          tr.appendChild(td4);
          if (it.type === "container" || it.type === "directory") {
            tr.ondblclick = function() {
              currentPath.push(it);
              openNode(it, currentPath.slice());
            };
            tr.oncontextmenu = function(e) { _showContextMenu(e, it, mainAction); };
          }
          _attachFileHandlers(tr, it);
          tb.appendChild(tr);
        })(kids[i]);
      }
      contentEl.appendChild(tbl);
    } else {
      var grid = document.createElement("div");
      grid.className = "dgr-large";
      for (var i = 0; i < kids.length; i++) {
        (function(it) {
          var div = document.createElement("div");
          div.className = "dgr-li";
          var img = document.createElement("img");
          img.src = _getIconSrc(it);
          img.alt = "";
          var sp = document.createElement("span");
          sp.textContent = it.name;
          div.appendChild(img);
          div.appendChild(sp);
          if (it.type === "container" || it.type === "directory") {
            div.ondblclick = function() {
              currentPath.push(it);
              openNode(it, currentPath.slice());
            };
            div.oncontextmenu = function(e) { _showContextMenu(e, it, mainAction); };
          }
          _attachFileHandlers(div, it);
          grid.appendChild(div);
        })(kids[i]);
      }
      contentEl.appendChild(grid);
    }
  }
  function buildTree(item, parentEl, path) {
    item._id = ++idSeq;
    var isFolder = item.type === "container" || item.type === "directory";
    var nodeEl = document.createElement("div");
    nodeEl.className = "dgr-tn";
    nodeEl.setAttribute("data-id", item._id);
    var cv = document.createElement("span");
    cv.className = "cv";
    cv.textContent = isFolder ? ">" : "";
    var img = document.createElement("img");
    img.src = _getIconSrc(item);
    img.alt = "";
    var nm = document.createElement("span");
    nm.textContent = item.name;
    nodeEl.appendChild(cv);
    nodeEl.appendChild(img);
    nodeEl.appendChild(nm);
    parentEl.appendChild(nodeEl);
    if (isFolder) {
      var ch = document.createElement("div");
      ch.className = "dgr-tch";
      ch.style.display = "none";
      parentEl.appendChild(ch);
      var itemPath = path.concat([item]);
      (function(cvRef, chRef, ip, itRef) {
        nodeEl.onclick = function(e) {
          e.stopPropagation();
          var open = chRef.style.display !== "none";
          chRef.style.display = open ? "none" : "block";
          cvRef.textContent = open ? ">" : "v";
          currentPath.length = 0;
          for (var j = 0; j < ip.length; j++) currentPath.push(ip[j]);
          openNode(itRef, ip);
        };
        nodeEl.oncontextmenu = function(e) { _showContextMenu(e, itRef, mainAction); };
      })(cv, ch, itemPath, item);
      var children = _getChildren(item);
      for (var i = 0; i < children.length; i++)
        buildTree(children[i], ch, itemPath);
    }
  }
  var rootVirtual = {
    name: "Storage",
    type: "container",
    _id: 0,
    directories: _currentData,
    files: [],
  };
  function _findNodeByPath(names) {
    if (!names || names.length === 0) return null;
    var node = rootVirtual;
    for (var i = 1; i < names.length; i++) {
      var kids = _getChildren(node);
      var found = null;
      for (var k = 0; k < kids.length; k++) {
        if (kids[k].name === names[i]) {
          found = kids[k];
          break;
        }
      }
      if (!found) return node;
      node = found;
    }
    return node;
  }
  buildTree(rootVirtual, treeEl, []);
  function _restoreOrRoot(pathNames) {
    if (pathNames && pathNames.length > 0) {
      var target = _findNodeByPath(pathNames);
      if (target) {
        var p = [];
        var node = rootVirtual;
        p.push(node);
        for (var i = 1; i < pathNames.length; i++) {
          var kids = _getChildren(node);
          var found = null;
          for (var k = 0; k < kids.length; k++) {
            if (kids[k].name === pathNames[i]) {
              found = kids[k];
              break;
            }
          }
          if (!found) break;
          node = found;
          p.push(node);
        }
        currentPath = p;
        openNode(p[p.length - 1], p.slice());
        return;
      }
    }
    currentPath.push(rootVirtual);
    openNode(rootVirtual, [rootVirtual]);
  }
  _restoreOrRoot(savedPath);
  btnD.onclick = function() {
    currentView = "details";
    btnD.classList.add("active");
    btnL.classList.remove("active");
    if (currentNode) renderContent(currentNode);
  };
  btnL.onclick = function() {
    currentView = "large";
    btnL.classList.add("active");
    btnD.classList.remove("active");
    if (currentNode) renderContent(currentNode);
  };
  return {
    refreshData: function(newData, pathNames) {
      _currentData = newData;
      rootVirtual.directories = newData;
      idSeq = 0;
      treeEl.innerHTML = "";
      buildTree(rootVirtual, treeEl, []);
      _restoreOrRoot(pathNames);
    },
    restorePath: function(pathNames) {
      _restoreOrRoot(pathNames);
    },
  };
}

export { _buildDirExplorer as default };
