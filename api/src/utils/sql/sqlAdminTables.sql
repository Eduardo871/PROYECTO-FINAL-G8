
--Table Categories
--ID 1      
INSERT INTO "categories" (name , description , image  )
      VALUES ('HAIRCUT','CORTE DE CABELLO', 
       '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966717/Catalog/services/cover/haircut01_ibwu50.png}');       

--ID 2
INSERT INTO "categories" (name , description , image  ) 
      VALUES ('BEARDCUT','ARREGLO DE BARBA', 
      '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/barbercutCat02_ui5pqb.jpg,
        https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/barberCat_yflg3e.jpg,
        https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/barbercutCat03_qld4ko.jpg
       }');
--ID 3
INSERT INTO "categories" (name , description , image  ) 
    VALUES ('KIDHAIRCUT','CORTE DE NIÑOS', 
      '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966716/Catalog/services/cover/kidscutCat03_yhyziw.jpg,
        https://res.cloudinary.com/doovf5g5c/image/upload/v1623966716/Catalog/services/cover/kidscutCat_gwty2m.jpg
      }');
--ID 4      
INSERT INTO "categories" (name , description , image  ) 
     VALUES ('HAIRCOLOR','COLORACION DE CABELLO', 
      '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/Color03_uuolhl.jpg,
        https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/Color02_xcuymu.jpg,
        https://res.cloudinary.com/doovf5g5c/image/upload/v1623966714/Catalog/services/cover/Colors01_aozuxu.jpg
      }');
--ID 5
INSERT INTO "categories" (name , description , image  ) 
    VALUES ('DESIGN','CORTE ARTISTICO', 
      '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623967504/Catalog/services/cover/design02_adhpcy.jpg,
      https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/designCategory_gk2itd.png
      }');
--ID 6
INSERT INTO "categories" (name , description , image  ) 
    VALUES ('OZON','Male Grooming', '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966716/Catalog/services/cover/Ozone_ctbswc.jpg}');

--ID 7      
INSERT INTO "categories" (name , description , image  ) 
  VALUES ('MASK','MASCARILLA', '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623966715/Catalog/services/cover/mask_category_grbkis.jpg}');


--Tables Services
INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'BUZZ',
      7500,
      'Es un corte muy solicitado por aquellos hombres que empiezan a notar pérdida de pelo. Consiste en un cabello muy corto, normalmente cortado al 1 y que se pasa por toda la cabeza por igual.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898851/Catalog/services/1.HAIRCUT/buzzCut/buzzcut01-180x225_rojvnh.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/buzzCut/buzzcut02_hbiyzq.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/buzzCut/buzzcut05_vbw0dz.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/buzzCut/buzzcut03_d3lkow.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/buzzCut/buzzcut06_ktbx0v.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/buzzCut/buzzcut04_e2mlwt.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'FADE',
      55000,
      'Significa <span>degradado</span> y consiste en un corte con nuca, patillas y laterales muy cortos o incluso afeitados, volviéndose más largo en la parte superior de la cabeza. Es el corte más solicitado en la actualidad.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut01_hinlkt.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut07_prpijf.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut03_vvtdel.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut03_vvtdel.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut05_acyy1f.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut05_acyy1f.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898843/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut06_bfmmas.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898842/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut08_njvybl.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898842/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut02_byq186.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898842/Catalog/services/1.HAIRCUT/fadeCut/fadeetCut04_ftxcfe.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'FRENCH CROP CUT',
      5000,
      'Se trata del más clásico de los cortes masculinos, pero muy chic. Lleva normalmente la raya lateral y lo que se busca es que apenas haya diferencia entre los laterales y la parte de arriba, que sea todo muy sutil y elegante, con un acabado pulido.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898842/Catalog/services/1.HAIRCUT/frenchCropCut/frenchcropCut04_sobj1t.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898841/Catalog/services/1.HAIRCUT/frenchCropCut/frenchcropCut01_kbg8sb.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898841/Catalog/services/1.HAIRCUT/frenchCropCut/frenchcropCut03_btffg4.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898841/Catalog/services/1.HAIRCUT/frenchCropCut/frenchcropCut02_lvtqx3.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'FRENCH DARK CUT',
      5000,
      'El término clara u oscura hace referencia a la sensación visual que da el corte en los laterales. Cuando la apariencia es de mayor densidad por llevarlo más largo, es francesa oscura. Si el cabello es corto y se ve la piel, será una francesa clara',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898841/Catalog/services/1.HAIRCUT/frenchCropDarkCut/frenchcropdarkCut03_qjpcf3.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898841/Catalog/services/1.HAIRCUT/frenchCropDarkCut/frenchcropdarkCut01_snn1o8.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898840/Catalog/services/1.HAIRCUT/frenchCropDarkCut/frenchcropdarkCut02_ijd1d3.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'HONGO',
      5000,
      'Es un corte solo para cabellos lisos y aunque nació en los años 90, se ha actualizado dando lugar a varias opciones. Se trata de un corte circular y totalmente recto, que empezó siendo a la altura de la parte superior de las orejas y que después',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/hongoCut/hongoCut03_rzt8f2.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898850/Catalog/services/1.HAIRCUT/hongoCut/hongoCut02_jyjfdy.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898849/Catalog/services/1.HAIRCUT/hongoCut/hongoCut07_hrq1ko.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898849/Catalog/services/1.HAIRCUT/hongoCut/hongoCut05_yctfb2.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898849/Catalog/services/1.HAIRCUT/hongoCut/hongoCut01_oqhdxd.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/hongoCut/hongoCut04_xahn6k.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/hongoCut/hongoCut06_hk8zbp.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'MILITARY CUT',
      48000,
      'Limpio, clásico, corporal. Si estas son las palabras que te vienen a la mente cuando piensas en tu peinado ideal, entonces un corte de pelo militar es el indicado.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898849/Catalog/services/1.HAIRCUT/militaryCut/militaryCut03_ewk3hp.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/militaryCut/militaryCut02_bdw1zb.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/militaryCut/militaryCut05_f0jp38.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/militaryCut/militaryCut01_ghfg7c.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/militaryCut/militaryCut04_rsshkj.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898848/Catalog/services/1.HAIRCUT/militaryCut/militaryCut09_s9i4q8.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/militaryCut/militaryCut08_ptpeh2.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/militaryCut/militaryCut07_awaybc.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/militaryCut/militaryCut06_fkprxm.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/militaryCut/militaryCut10_u4ktff.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'MOHICANO',
      5000,
      'La principal característica del corte de pelo mohicano es que se lleva el pelo rapado por los lados y la parte central más larga y peinada hacia arriba. El largo de la parte superior puede variar.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898846/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut07_ml01kq.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898846/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut03_ovyhyj.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898846/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut05_swi520.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898846/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut08_tbj0xp.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut10_tibncc.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut06_d8ow7s.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut09_nujgvr.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut01_vqfzio.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut02_omalhr.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898845/Catalog/services/1.HAIRCUT/mohicanoCut/mohicanoCut04_m6pooy.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'MULLET CUT',
      5000,
      'El mullet fue el corte por excelencia de los años 70 y principios de los 80, Las modas siempre vuelven, pero esta sí que no la esperábamos y se ha convertido en el peinado estrella del 2021.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898852/Catalog/services/1.HAIRCUT/mulletCut/mulletCut07_olyo6l.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898852/Catalog/services/1.HAIRCUT/mulletCut/mulletCut06_q2cobr.png,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898852/Catalog/services/1.HAIRCUT/mulletCut/mulletCut03_vl33hl.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898852/Catalog/services/1.HAIRCUT/mulletCut/mulletCut01_dplg09.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898851/Catalog/services/1.HAIRCUT/mulletCut/mulletCut02_cusjni.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898851/Catalog/services/1.HAIRCUT/mulletCut/mulletCut05_vkwovg.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898851/Catalog/services/1.HAIRCUT/mulletCut/mulletCut04_hp9mzo.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'POMPADOUR',
      70000,
      'Este corte se familiarizó entre los hombres durante la década de los 50, aunque su origen hacía referencia al peinado que popularizó Madame Pompadour hacia el 1700 y que consistía en elevar el flequillo.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623983929/Catalog/services/1.HAIRCUT/pompadourCut/pompadour_gvndxg.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623984056/Catalog/services/1.HAIRCUT/pompadourCut/pompadour01_q05tms.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623984057/Catalog/services/1.HAIRCUT/pompadourCut/pompadour02_yov52x.png
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      'SPIKY',
      5000,
      'Es el clásico “pelo pincho” de toda la vida. Le sienta bien a hombres de todas las edades, por su versatilidad y que se ajusta a la forma de cada rostro.',
 '{https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/spikyCut/spikyCut01_kyltub.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/spikyCut/spikyCut06_ixkb8t.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/spikyCut/spikyCut02_yfqvba.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898847/Catalog/services/1.HAIRCUT/spikyCut/spikyCut04_bp5p7m.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898846/Catalog/services/1.HAIRCUT/spikyCut/spikyCut05_se8mi8.jpg,
 https://res.cloudinary.com/doovf5g5c/image/upload/v1623898846/Catalog/services/1.HAIRCUT/spikyCut/spikyCut03_hpmwku.jpg
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');

INSERT INTO "services" (name ,price, description , image  ) 
    VALUES (
      '',
      5000,
      '',
 '{
 }');
