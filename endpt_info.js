var endpt_desc ={
"param":{

  CPR: [ "010", "011", "012", "013", "014", "015", "016", "017", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359", "360", "391", "392", "393", "394", "395", "396", "397", "945", "956", "957"],
  CSD: [ "010", "011", "012", "013", "014", "015", "016", "017", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359", "360", "391", "392", "393", "394", "395", "396", "397", "945", "947", "948"],
  DRL: [ "010", "011", "012", "013", "014", "015", "150", "151", "016", "017", "650", "651", "656", "657"],
  DSD: [ "010", "011", "012", "013", "014", "0150", "350", "945", "956", "957", "959", "960", "961", "962", "963", "964", "965"],
  FCN: [ "010", "011", "012", "013", "014", "015", "016", "017", "220", "221", "248", "945", "956", "957"],
  FI:  [ "010", "011", "012", "013", "014", "015", "150", "151", "016", "017", "650", "651", "656", "750", "751", "752", "753"],
  FR:  [ "010", "011", "012", "013", "014", "015", "016", "017", "200"],
  IMP: [ "010", "011", "012", "013", "014", "015", "016", "900", "901", "902", "903", "904", "905", "906", "907", "908", "945", "946"],
  IRA: [ "010", "011", "012", "013", "014", "015", "550", "551", "552", "553", "554", "555", "556", "557", "558", "945", "953", "954", "956", "957"],
  MTS: [ "010", "011", "012", "013", "014", "015", "016", "017", "450", "451", "452", "453", "454", "455", "488", "493", "494", "495", "496", "945", "956", "957"],
  PI:  [ "010", "011", "012", "013", "014", "015", "150", "151", "016", "017", "650", "651", "656", "750", "751", "752", "753", "800", "801", "802"],
  PR:  [ "010", "011", "012", "013", "014", "015", "016", "017", "200", "201", "945", "956", "957"],
  TCP: [ "010", "011", "012", "013", "014", "015", "016", "017", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359", "360", "391", "392", "393", "394", "395", "396", "397", "400", "401", "402", "403", "404", "405", "956", "957"],
  TCS: [ "010", "011", "012", "013", "014", "015", "016", "017", "350", "351", "352", "353", "354", "355", "356", "357", "358", "359", "360", "391", "392", "393", "394", "395", "396", "397", "400", "401", "402", "403", "404", "405", "947", "948"],
  TDR: [ "010", "011", "012", "013", "014", "015", "150", "151", "016", "017", "650", "651", "656", "657"],
  TFC: [ "010", "011", "012", "013", "014", "015", "016", "017", "220", "221", "239", "240", "248", "945", "956", "957", "975", "976"],
  TFR: [ "010", "011", "012", "013", "014", "015", "150", "151", "154", "016", "017", "200"],
  TIR: [ "010", "011", "012", "013", "014", "015", "550", "551", "552", "553", "554", "555", "556", "557", "558", "600", "601", "602", "603", "956", "957"],
  TMT: [ "010", "011", "012", "013", "014", "015", "016", "017", "450", "451", "452", "453", "454", "455", "488", "493", "494", "495", "496", "500", "501", "502", "503", "504", "956", "957"],
  TPR: [ "010", "011", "012", "013", "014", "015", "150", "151", "154", "016", "017", "200", "201", "207", "956", "957"],
  TRD: [ "010", "011", "012", "013", "014", "015", "150", "151", "016", "017", "250", "251", "256", "945", "956", "957"],
  TTR: [ "010", "011", "012", "013", "014", "015", "150", "151", "016", "017", "250", "251", "256", "956", "957"],
  VIG: [ "010", "011", "012", "013", "014", "015", "016", "017", "700", "701", "702", "703", "704", "705", "706", "707", "708", "709", "710", "711", "712", "713", "714", "715", "716", "717", "718", "719", "720", "721", "722", "723", "724", "725", "726", "727", "728", "729", "730", "731", "732", "733", "734", "735", "736", "737", "738", "739", "740", "741"],
  "":  ["001","002","003","004","005","006","007","008","009","010","011","012","013","014","015","016","017","018","019","020","021","022","023","024","060","100","101","150","151","152","153","154","155","156","157","158","159","160","161","200","201","202","203","204","205","206","207","208","209","210","211","212","250","251","252","253","254","255","256","350","351","352","353","354","355","356","357","358","359","360","361","362","363","364","365","366","367","368","369","370","371","372","373","374","375","376","377","378","379","380","381","382","383","384","385","386","387","388","389","390","391","392","393","394","395","396","397","400","401","402","403","404","405","450","451","452","453","454","455","456","457","458","459","460","461","462","463","464","465","466","467","468","469","470","471","472","473","474","475","476","477","478","479","480","481","482","483","484","485","486","487","488","489","490","491","492","493","494","495","496","500","501","502","503","504","550","551","552","553","554","555","556","557","558","559","560","561","562","563","564","565","566","567","568","569","570","571","572","573","574","575","576","577","578","579","580","600","601","602","603","604","605","606","650","651","652","653","654","655","656","657","681","700","701","702","703","704","705","706","707","708","709","710","711","712","713","714","715","716","717","718","719","720","721","722","723","724","725","726","727","728","729","730","731","732","733","734","735","736","737","738","739","740","741","742","743","744","745","750","751","752","753","775","776","777","778","779","780","781","782","800","801","802","900","901","902","903","904","905","906","907","908","909","910","911","912","913","914","915","916","917","918","919","920","921","922","923","924","925","926","927","928","929","930","931","932","933","934","935","936","937","938","939","940","941","942","943","944","945","946","947","948","953","954"]
}

};


export default endpt_desc;
