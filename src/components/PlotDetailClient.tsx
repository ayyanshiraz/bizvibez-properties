'use client';

import { useState, useRef, useEffect } from 'react';
import { Plot } from '@/data/mockData';
import Image from 'next/image';
import { MapPin, Share2, User, ChevronLeft, ChevronRight, CalendarDays, Maximize, Search } from 'lucide-react';

// --- COUNTRY DATA with ISO codes for image flags ---
const countries = [
    { name: "Afghanistan", localName: "افغانستان", code: "+93", flag: "🇦🇫", iso: "AF" },
    { name: "Albania", localName: "Shqipëri", code: "+355", flag: "🇦🇱", iso: "AL" },
    { name: "Algeria", localName: "الجزائر", code: "+213", flag: "🇩🇿", iso: "DZ" },
    { name: "American Samoa", localName: "American Samoa", code: "+1684", flag: "🇦🇸", iso: "AS" },
    { name: "Andorra", localName: "Andorra", code: "+376", flag: "🇦🇩", iso: "AD" },
    { name: "Angola", localName: "Angola", code: "+244", flag: "🇦🇴", iso: "AO" },
    { name: "Anguilla", localName: "Anguilla", code: "+1264", flag: "🇦🇮", iso: "AI" },
    { name: "Antarctica", localName: "Antarctica", code: "+672", flag: "🇦🇶", iso: "AQ" },
    { name: "Antigua and Barbuda", localName: "Antigua and Barbuda", code: "+1268", flag: "🇦🇬", iso: "AG" },
    { name: "Argentina", localName: "Argentina", code: "+54", flag: "🇦🇷", iso: "AR" },
    { name: "Armenia", localName: "Հայաստան", code: "+374", flag: "🇦🇲", iso: "AM" },
    { name: "Aruba", localName: "Aruba", code: "+297", flag: "🇦🇼", iso: "AW" },
    { name: "Australia", localName: "Australia", code: "+61", flag: "🇦🇺", iso: "AU" },
    { name: "Austria", localName: "Österreich", code: "+43", flag: "🇦🇹", iso: "AT" },
    { name: "Azerbaijan", localName: "Azərbaycan", code: "+994", flag: "🇦🇿", iso: "AZ" },
    { name: "Bahamas", localName: "Bahamas", code: "+1242", flag: "🇧🇸", iso: "BS" },
    { name: "Bahrain", localName: "البحرين", code: "+973", flag: "🇧🇭", iso: "BH" },
    { name: "Bangladesh", localName: "বাংলাদেশ", code: "+880", flag: "🇧🇩", iso: "BD" },
    { name: "Barbados", localName: "Barbados", code: "+1246", flag: "🇧🇧", iso: "BB" },
    { name: "Belarus", localName: "Беларусь", code: "+375", flag: "🇧🇾", iso: "BY" },
    { name: "Belgium", localName: "België", code: "+32", flag: "🇧🇪", iso: "BE" },
    { name: "Belize", localName: "Belize", code: "+501", flag: "🇧🇿", iso: "BZ" },
    { name: "Benin", localName: "Bénin", code: "+229", flag: "🇧🇯", iso: "BJ" },
    { name: "Bermuda", localName: "Bermuda", code: "+1441", flag: "🇧🇲", iso: "BM" },
    { name: "Bhutan", localName: "འབྲུག", code: "+975", flag: "🇧🇹", iso: "BT" },
    { name: "Bolivia", localName: "Bolivia", code: "+591", flag: "🇧🇴", iso: "BO" },
    { name: "Bosnia and Herzegovina", localName: "Bosna i Hercegovina", code: "+387", flag: "🇧🇦", iso: "BA" },
    { name: "Botswana", localName: "Botswana", code: "+267", flag: "🇧🇼", iso: "BW" },
    { name: "Brazil", localName: "Brasil", code: "+55", flag: "🇧🇷", iso: "BR" },
    { name: "British Indian Ocean Territory", localName: "British Indian Ocean Territory", code: "+246", flag: "🇮🇴", iso: "IO" },
    { name: "British Virgin Islands", localName: "British Virgin Islands", code: "+1284", flag: "🇻🇬", iso: "VG" },
    { name: "Brunei", localName: "Brunei", code: "+673", flag: "🇧🇳", iso: "BN" },
    { name: "Bulgaria", localName: "България", code: "+359", flag: "🇧🇬", iso: "BG" },
    { name: "Burkina Faso", localName: "Burkina Faso", code: "+226", flag: "🇧🇫", iso: "BF" },
    { name: "Burundi", localName: "Burundi", code: "+257", flag: "🇧🇮", iso: "BI" },
    { name: "Cambodia", localName: "កម្ពុជា", code: "+855", flag: "🇰🇭", iso: "KH" },
    { name: "Cameroon", localName: "Cameroon", code: "+237", flag: "🇨🇲", iso: "CM" },
    { name: "Canada", localName: "Canada", code: "+1", flag: "🇨🇦", iso: "CA" },
    { name: "Cape Verde", localName: "Cabo Verde", code: "+238", flag: "🇨🇻", iso: "CV" },
    { name: "Cayman Islands", localName: "Cayman Islands", code: "+1345", flag: "🇰🇾", iso: "KY" },
    { name: "Central African Republic", localName: "République centrafricaine", code: "+236", flag: "🇨🇫", iso: "CF" },
    { name: "Chad", localName: "Tchad", code: "+235", flag: "🇹🇩", iso: "TD" },
    { name: "Chile", localName: "Chile", code: "+56", flag: "🇨🇱", iso: "CL" },
    { name: "China", localName: "中国", code: "+86", flag: "🇨🇳", iso: "CN" },
    { name: "Christmas Island", localName: "Christmas Island", code: "+61", flag: "🇨🇽", iso: "CX" },
    { name: "Cocos Islands", localName: "Cocos Islands", code: "+61", flag: "🇨🇨", iso: "CC" },
    { name: "Colombia", localName: "Colombia", code: "+57", flag: "🇨🇴", iso: "CO" },
    { name: "Comoros", localName: "Comores", code: "+269", flag: "🇰🇲", iso: "KM" },
    { name: "Cook Islands", localName: "Cook Islands", code: "+682", flag: "🇨🇰", iso: "CK" },
    { name: "Costa Rica", localName: "Costa Rica", code: "+506", flag: "🇨🇷", iso: "CR" },
    { name: "Croatia", localName: "Hrvatska", code: "+385", flag: "🇭🇷", iso: "HR" },
    { name: "Cuba", localName: "Cuba", code: "+53", flag: "🇨🇺", iso: "CU" },
    { name: "Curacao", localName: "Curaçao", code: "+599", flag: "🇨🇼", iso: "CW" },
    { name: "Cyprus", localName: "Κύπρος", code: "+357", flag: "🇨🇾", iso: "CY" },
    { name: "Czech Republic", localName: "Česká republika", code: "+420", flag: "🇨🇿", iso: "CZ" },
    { name: "Democratic Republic of the Congo", localName: "République démocratique du Congo", code: "+243", flag: "🇨🇩", iso: "CD" },
    { name: "Denmark", localName: "Danmark", code: "+45", flag: "🇩🇰", iso: "DK" },
    { name: "Djibouti", localName: "Djibouti", code: "+253", flag: "🇩🇯", iso: "DJ" },
    { name: "Dominica", localName: "Dominica", code: "+1767", flag: "🇩🇲", iso: "DM" },
    { name: "Dominican Republic", localName: "República Dominicana", code: "+1", flag: "🇩🇴", iso: "DO" },
    { name: "East Timor", localName: "Timor-Leste", code: "+670", flag: "🇹🇱", iso: "TL" },
    { name: "Ecuador", localName: "Ecuador", code: "+593", flag: "🇪🇨", iso: "EC" },
    { name: "Egypt", localName: "مصر", code: "+20", flag: "🇪🇬", iso: "EG" },
    { name: "El Salvador", localName: "El Salvador", code: "+503", flag: "🇸🇻", iso: "SV" },
    { name: "Equatorial Guinea", localName: "Guinea Ecuatorial", code: "+240", flag: "🇬🇶", iso: "GQ" },
    { name: "Eritrea", localName: "ኤርትራ", code: "+291", flag: "🇪🇷", iso: "ER" },
    { name: "Estonia", localName: "Eesti", code: "+372", flag: "🇪🇪", iso: "EE" },
    { name: "Ethiopia", localName: "ኢትዮጵያ", code: "+251", flag: "🇪🇹", iso: "ET" },
    { name: "Falkland Islands", localName: "Falkland Islands", code: "+500", flag: "🇫🇰", iso: "FK" },
    { name: "Faroe Islands", localName: "Føroyar", code: "+298", flag: "🇫🇴", iso: "FO" },
    { name: "Fiji", localName: "Fiji", code: "+679", flag: "🇫🇯", iso: "FJ" },
    { name: "Finland", localName: "Suomi", code: "+358", flag: "🇫🇮", iso: "FI" },
    { name: "France", localName: "France", code: "+33", flag: "🇫🇷", iso: "FR" },
    { name: "French Polynesia", localName: "Polynésie française", code: "+689", flag: "🇵🇫", iso: "PF" },
    { name: "Gabon", localName: "Gabon", code: "+241", flag: "🇬🇦", iso: "GA" },
    { name: "Gambia", localName: "Gambia", code: "+220", flag: "🇬🇲", iso: "GM" },
    { name: "Georgia", localName: "საქართველო", code: "+995", flag: "🇬🇪", iso: "GE" },
    { name: "Germany", localName: "Deutschland", code: "+49", flag: "🇩🇪", iso: "DE" },
    { name: "Ghana", localName: "Ghana", code: "+233", flag: "🇬🇭", iso: "GH" },
    { name: "Gibraltar", localName: "Gibraltar", code: "+350", flag: "🇬🇮", iso: "GI" },
    { name: "Greece", localName: "Ελλάδα", code: "+30", flag: "🇬🇷", iso: "GR" },
    { name: "Greenland", localName: "Kalaallit Nunaat", code: "+299", flag: "🇬🇱", iso: "GL" },
    { name: "Grenada", localName: "Grenada", code: "+1473", flag: "🇬🇩", iso: "GD" },
    { name: "Guam", localName: "Guam", code: "+1671", flag: "🇬🇺", iso: "GU" },
    { name: "Guatemala", localName: "Guatemala", code: "+502", flag: "🇬🇹", iso: "GT" },
    { name: "Guernsey", localName: "Guernsey", code: "+44", flag: "🇬🇬", iso: "GG" },
    { name: "Guinea", localName: "Guinée", code: "+224", flag: "🇬🇳", iso: "GN" },
    { name: "Guinea-Bissau", localName: "Guiné-Bissau", code: "+245", flag: "🇬🇼", iso: "GW" },
    { name: "Guyana", localName: "Guyana", code: "+592", flag: "🇬🇾", iso: "GY" },
    { name: "Haiti", localName: "Haïti", code: "+509", flag: "🇭🇹", iso: "HT" },
    { name: "Honduras", localName: "Honduras", code: "+504", flag: "🇭🇳", iso: "HN" },
    { name: "Hong Kong", localName: "香港", code: "+852", flag: "🇭🇰", iso: "HK" },
    { name: "Hungary", localName: "Magyarország", code: "+36", flag: "🇭🇺", iso: "HU" },
    { name: "Iceland", localName: "Ísland", code: "+354", flag: "🇮🇸", iso: "IS" },
    { name: "India", localName: "भारत", code: "+91", flag: "🇮🇳", iso: "IN" },
    { name: "Indonesia", localName: "Indonesia", code: "+62", flag: "🇮🇩", iso: "ID" },
    { name: "Iran", localName: "ایران", code: "+98", flag: "🇮🇷", iso: "IR" },
    { name: "Iraq", localName: "العراق", code: "+964", flag: "🇮🇶", iso: "IQ" },
    { name: "Ireland", localName: "Éire", code: "+353", flag: "🇮🇪", iso: "IE" },
    { name: "Isle of Man", localName: "Isle of Man", code: "+44", flag: "🇮🇲", iso: "IM" },
    { name: "Israel", localName: "ישראל", code: "+972", flag: "🇮🇱", iso: "IL" },
    { name: "Italy", localName: "Italia", code: "+39", flag: "🇮🇹", iso: "IT" },
    { name: "Ivory Coast", localName: "Côte d'Ivoire", code: "+225", flag: "🇨🇮", iso: "CI" },
    { name: "Jamaica", localName: "Jamaica", code: "+1876", flag: "🇯🇲", iso: "JM" },
    { name: "Japan", localName: "日本", code: "+81", flag: "🇯🇵", iso: "JP" },
    { name: "Jersey", localName: "Jersey", code: "+44", flag: "🇯🇪", iso: "JE" },
    { name: "Jordan", localName: "الأردن", code: "+962", flag: "🇯🇴", iso: "JO" },
    { name: "Kazakhstan", localName: "Казахстан", code: "+7", flag: "🇰🇿", iso: "KZ" },
    { name: "Kenya", localName: "Kenya", code: "+254", flag: "🇰🇪", iso: "KE" },
    { name: "Kiribati", localName: "Kiribati", code: "+686", flag: "🇰🇮", iso: "KI" },
    { name: "Kosovo", localName: "Kosovë", code: "+383", flag: "🇽🇰", iso: "XK" },
    { name: "Kuwait", localName: "الكويت", code: "+965", flag: "🇰🇼", iso: "KW" },
    { name: "Kyrgyzstan", localName: "Кыргызстан", code: "+996", flag: "🇰🇬", iso: "KG" },
    { name: "Laos", localName: "ລາວ", code: "+856", flag: "🇱🇦", iso: "LA" },
    { name: "Latvia", localName: "Latvija", code: "+371", flag: "🇱🇻", iso: "LV" },
    { name: "Lebanon", localName: "لبنان", code: "+961", flag: "🇱🇧", iso: "LB" },
    { name: "Lesotho", localName: "Lesotho", code: "+266", flag: "🇱🇸", iso: "LS" },
    { name: "Liberia", localName: "Liberia", code: "+231", flag: "🇱🇷", iso: "LR" },
    { name: "Libya", localName: "ليبيا", code: "+218", flag: "🇱🇾", iso: "LY" },
    { name: "Liechtenstein", localName: "Liechtenstein", code: "+423", flag: "🇱🇮", iso: "LI" },
    { name: "Lithuania", localName: "Lietuva", code: "+370", flag: "🇱🇹", iso: "LT" },
    { name: "Luxembourg", localName: "Lëtzebuerg", code: "+352", flag: "🇱🇺", iso: "LU" },
    { name: "Macau", localName: "澳門", code: "+853", flag: "🇲🇴", iso: "MO" },
    { name: "Macedonia", localName: "Македонија", code: "+389", flag: "🇲🇰", iso: "MK" },
    { name: "Madagascar", localName: "Madagasikara", code: "+261", flag: "🇲🇬", iso: "MG" },
    { name: "Malawi", localName: "Malawi", code: "+265", flag: "🇲🇼", iso: "MW" },
    { name: "Malaysia", localName: "Malaysia", code: "+60", flag: "🇲🇾", iso: "MY" },
    { name: "Maldives", localName: "Maldives", code: "+960", flag: "🇲🇻", iso: "MV" },
    { name: "Mali", localName: "Mali", code: "+223", flag: "🇲🇱", iso: "ML" },
    { name: "Malta", localName: "Malta", code: "+356", flag: "🇲🇹", iso: "MT" },
    { name: "Marshall Islands", localName: "Marshall Islands", code: "+692", flag: "🇲🇭", iso: "MH" },
    { name: "Mauritania", localName: "Mauritanie", code: "+222", flag: "🇲🇷", iso: "MR" },
    { name: "Mauritius", localName: "Mauritius", code: "+230", flag: "🇲🇺", iso: "MU" },
    { name: "Mayotte", localName: "Mayotte", code: "+262", flag: "🇾🇹", iso: "YT" },
    { name: "Mexico", localName: "México", code: "+52", flag: "🇲🇽", iso: "MX" },
    { name: "Micronesia", localName: "Micronesia", code: "+691", flag: "🇫🇲", iso: "FM" },
    { name: "Moldova", localName: "Moldova", code: "+373", flag: "🇲🇩", iso: "MD" },
    { name: "Monaco", localName: "Monaco", code: "+377", flag: "🇲🇨", iso: "MC" },
    { name: "Mongolia", localName: "Монгол", code: "+976", flag: "🇲🇳", iso: "MN" },
    { name: "Montenegro", localName: "Crna Gora", code: "+382", flag: "🇲🇪", iso: "ME" },
    { name: "Montserrat", localName: "Montserrat", code: "+1664", flag: "🇲🇸", iso: "MS" },
    { name: "Morocco", localName: "المغرب", code: "+212", flag: "🇲🇦", iso: "MA" },
    { name: "Mozambique", localName: "Moçambique", code: "+258", flag: "🇲🇿", iso: "MZ" },
    { name: "Myanmar", localName: "မြန်မာ", code: "+95", flag: "🇲🇲", iso: "MM" },
    { name: "Namibia", localName: "Namibia", code: "+264", flag: "🇳🇦", iso: "NA" },
    { name: "Nauru", localName: "Nauru", code: "+674", flag: "🇳🇷", iso: "NR" },
    { name: "Nepal", localName: "नेपाल", code: "+977", flag: "🇳🇵", iso: "NP" },
    { name: "Netherlands", localName: "Nederland", code: "+31", flag: "🇳🇱", iso: "NL" },
    { name: "New Caledonia", localName: "Nouvelle-Calédonie", code: "+687", flag: "🇳🇨", iso: "NC" },
    { name: "New Zealand", localName: "New Zealand", code: "+64", flag: "🇳🇿", iso: "NZ" },
    { name: "Nicaragua", localName: "Nicaragua", code: "+505", flag: "🇳🇮", iso: "NI" },
    { name: "Niger", localName: "Niger", code: "+227", flag: "🇳🇪", iso: "NE" },
    { name: "Nigeria", localName: "Nigeria", code: "+234", flag: "🇳🇬", iso: "NG" },
    { name: "Niue", localName: "Niue", code: "+683", flag: "🇳🇺", iso: "NU" },
    { name: "North Korea", localName: "조선민주주의인민공화국", code: "+850", flag: "🇰🇵", iso: "KP" },
    { name: "Northern Mariana Islands", localName: "Northern Mariana Islands", code: "+1670", flag: "🇲🇵", iso: "MP" },
    { name: "Norway", localName: "Norge", code: "+47", flag: "🇳🇴", iso: "NO" },
    { name: "Oman", localName: "عمان", code: "+968", flag: "🇴🇲", iso: "OM" },
    { name: "Pakistan", localName: "پاکستان", code: "+92", flag: "🇵🇰", iso: "PK" },
    { name: "Palau", localName: "Palau", code: "+680", flag: "🇵🇼", iso: "PW" },
    { name: "Palestine", localName: "فلسطين", code: "+970", flag: "🇵🇸", iso: "PS" },
    { name: "Panama", localName: "Panamá", code: "+507", flag: "🇵🇦", iso: "PA" },
    { name: "Papua New Guinea", localName: "Papua New Guinea", code: "+675", flag: "🇵🇬", iso: "PG" },
    { name: "Paraguay", localName: "Paraguay", code: "+595", flag: "🇵🇾", iso: "PY" },
    { name: "Peru", localName: "Perú", code: "+51", flag: "🇵🇪", iso: "PE" },
    { name: "Philippines", localName: "Philippines", code: "+63", flag: "🇵🇭", iso: "PH" },
    { name: "Poland", localName: "Polska", code: "+48", flag: "🇵🇱", iso: "PL" },
    { name: "Portugal", localName: "Portugal", code: "+351", flag: "🇵🇹", iso: "PT" },
    { name: "Puerto Rico", localName: "Puerto Rico", code: "+1", flag: "🇵🇷", iso: "PR" },
    { name: "Qatar", localName: "قطر", code: "+974", flag: "🇶🇦", iso: "QA" },
    { name: "Republic of the Congo", localName: "République du Congo", code: "+242", flag: "🇨🇬", iso: "CG" },
    { name: "Reunion", localName: "La Réunion", code: "+262", flag: "🇷🇪", iso: "RE" },
    { name: "Romania", localName: "România", code: "+40", flag: "🇷🇴", iso: "RO" },
    { name: "Russia", localName: "Россия", code: "+7", flag: "🇷🇺", iso: "RU" },
    { name: "Rwanda", localName: "Rwanda", code: "+250", flag: "🇷🇼", iso: "RW" },
    { name: "Saint Barthelemy", localName: "Saint-Barthélemy", code: "+590", flag: "🇧🇱", iso: "BL" },
    { name: "Saint Helena", localName: "Saint Helena", code: "+290", flag: "🇸🇭", iso: "SH" },
    { name: "Saint Kitts and Nevis", localName: "Saint Kitts and Nevis", code: "+1869", flag: "🇰🇳", iso: "KN" },
    { name: "Saint Lucia", localName: "Saint Lucia", code: "+1758", flag: "🇱🇨", iso: "LC" },
    { name: "Saint Martin", localName: "Saint-Martin", code: "+590", flag: "🇲🇫", iso: "MF" },
    { name: "Saint Pierre and Miquelon", localName: "Saint-Pierre-et-Miquelon", code: "+508", flag: "🇵🇲", iso: "PM" },
    { name: "Saint Vincent and the Grenadines", localName: "Saint Vincent and the Grenadines", code: "+1784", flag: "🇻🇨", iso: "VC" },
    { name: "Samoa", localName: "Samoa", code: "+685", flag: "🇼🇸", iso: "WS" },
    { name: "San Marino", localName: "San Marino", code: "+378", flag: "🇸🇲", iso: "SM" },
    { name: "Sao Tome and Principe", localName: "São Tomé e Príncipe", code: "+239", flag: "🇸🇹", iso: "ST" },
    { name: "Saudi Arabia", localName: "المملكة العربية السعودية", code: "+966", flag: "🇸🇦", iso: "SA" },
    { name: "Senegal", localName: "Sénégal", code: "+221", flag: "🇸🇳", iso: "SN" },
    { name: "Serbia", localName: "Србија", code: "+381", flag: "🇷🇸", iso: "RS" },
    { name: "Seychelles", localName: "Seychelles", code: "+248", flag: "🇸🇨", iso: "SC" },
    { name: "Sierra Leone", localName: "Sierra Leone", code: "+232", flag: "🇸🇱", iso: "SL" },
    { name: "Singapore", localName: "Singapore", code: "+65", flag: "🇸🇬", iso: "SG" },
    { name: "Sint Maarten", localName: "Sint Maarten", code: "+1721", flag: "🇸🇽", iso: "SX" },
    { name: "Slovakia", localName: "Slovensko", code: "+421", flag: "🇸🇰", iso: "SK" },
    { name: "Slovenia", localName: "Slovenija", code: "+386", flag: "🇸🇮", iso: "SI" },
    { name: "Solomon Islands", localName: "Solomon Islands", code: "+677", flag: "🇸🇧", iso: "SB" },
    { name: "Somalia", localName: "Soomaaliya", code: "+252", flag: "🇸🇴", iso: "SO" },
    { name: "South Africa", localName: "South Africa", code: "+27", flag: "🇿🇦", iso: "ZA" },
    { name: "South Korea", localName: "대한민국", code: "+82", flag: "🇰🇷", iso: "KR" },
    { name: "South Sudan", localName: "South Sudan", code: "+211", flag: "🇸🇸", iso: "SS" },
    { name: "Spain", localName: "España", code: "+34", flag: "🇪🇸", iso: "ES" },
    { name: "Sri Lanka", localName: "Sri Lanka", code: "+94", flag: "🇱🇰", iso: "LK" },
    { name: "Sudan", localName: "السودان", code: "+249", flag: "🇸🇩", iso: "SD" },
    { name: "Suriname", localName: "Suriname", code: "+597", flag: "🇸🇷", iso: "SR" },
    { name: "Svalbard and Jan Mayen", localName: "Svalbard og Jan Mayen", code: "+47", flag: "🇸🇯", iso: "SJ" },
    { name: "Swaziland", localName: "eSwatini", code: "+268", flag: "🇸🇿", iso: "SZ" },
    { name: "Sweden", localName: "Sverige", code: "+46", flag: "🇸🇪", iso: "SE" },
    { name: "Switzerland", localName: "Schweiz", code: "+41", flag: "🇨🇭", iso: "CH" },
    { name: "Syria", localName: "سوريا", code: "+963", flag: "🇸🇾", iso: "SY" },
    { name: "Taiwan", localName: "臺灣", code: "+886", flag: "🇹🇼", iso: "TW" },
    { name: "Tajikistan", localName: "Тоҷикистон", code: "+992", flag: "🇹🇯", iso: "TJ" },
    { name: "Tanzania", localName: "Tanzania", code: "+255", flag: "🇹🇿", iso: "TZ" },
    { name: "Thailand", localName: "ประเทศไทย", code: "+66", flag: "🇹🇭", iso: "TH" },
    { name: "Togo", localName: "Togo", code: "+228", flag: "🇹🇬", iso: "TG" },
    { name: "Tokelau", localName: "Tokelau", code: "+690", flag: "🇹🇰", iso: "TK" },
    { name: "Tonga", localName: "Tonga", code: "+676", flag: "🇹🇴", iso: "TO" },
    { name: "Trinidad and Tobago", localName: "Trinidad and Tobago", code: "+1868", flag: "🇹🇹", iso: "TT" },
    { name: "Tunisia", localName: "تونس", code: "+216", flag: "🇹🇳", iso: "TN" },
    { name: "Turkey", localName: "Türkiye", code: "+90", flag: "🇹🇷", iso: "TR" },
    { name: "Turkmenistan", localName: "Türkmenistan", code: "+993", flag: "🇹🇲", iso: "TM" },
    { name: "Turks and Caicos Islands", localName: "Turks and Caicos Islands", code: "+1649", flag: "🇹🇨", iso: "TC" },
    { name: "Tuvalu", localName: "Tuvalu", code: "+688", flag: "🇹🇻", iso: "TV" },
    { name: "U.S. Virgin Islands", localName: "U.S. Virgin Islands", code: "+1340", flag: "🇻🇮", iso: "VI" },
    { name: "Uganda", localName: "Uganda", code: "+256", flag: "🇺🇬", iso: "UG" },
    { name: "Ukraine", localName: "Україна", code: "+380", flag: "🇺🇦", iso: "UA" },
    { name: "United Arab Emirates", localName: "الإمارات العربية المتحدة", code: "+971", flag: "🇦🇪", iso: "AE" },
    { name: "United Kingdom", localName: "United Kingdom", code: "+44", flag: "🇬🇧", iso: "GB" },
    { name: "United States", localName: "United States", code: "+1", flag: "🇺🇸", iso: "US" },
    { name: "Uruguay", localName: "Uruguay", code: "+598", flag: "🇺🇾", iso: "UY" },
    { name: "Uzbekistan", localName: "Oʻzbekiston", code: "+998", flag: "🇺🇿", iso: "UZ" },
    { name: "Vanuatu", localName: "Vanuatu", code: "+678", flag: "🇻🇺", iso: "VU" },
    { name: "Vatican City", localName: "Città del Vaticano", code: "+39", flag: "🇻🇦", iso: "VA" },
    { name: "Venezuela", localName: "Venezuela", code: "+58", flag: "🇻🇪", iso: "VE" },
    { name: "Vietnam", localName: "Việt Nam", code: "+84", flag: "🇻🇳", iso: "VN" },
    { name: "Wallis and Futuna", localName: "Wallis-et-Futuna", code: "+681", flag: "🇼🇫", iso: "WF" },
    { name: "Western Sahara", localName: "الصحراء الغربية", code: "+212", flag: "🇪🇭", iso: "EH" },
    { name: "Yemen", localName: "اليمن", code: "+967", flag: "🇾🇪", iso: "YE" },
    { name: "Zambia", localName: "Zambia", code: "+260", flag: "🇿🇲", iso: "ZM" },
    { name: "Zimbabwe", localName: "Zimbabwe", code: "+263", flag: "🇿🇼", iso: "ZW" },
];


// --- COUNTRY CODE PICKER COMPONENT (ENHANCED) ---
const CountryCodePicker = ({ selectedCountry, onCountrySelect }: { selectedCountry: any, onCountrySelect: (country: any) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const pickerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.localName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.code.includes(searchTerm)
    );

    return (
        <div className="relative" ref={pickerRef}>
            <button
                type="button"
                className="flex items-center pl-3 pr-2 bg-white self-stretch border-r border-gray-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img src={`https://flagcdn.com/w20/${selectedCountry.iso.toLowerCase()}.png`} alt={selectedCountry.name} className="w-5 h-auto mr-2 rounded-sm" />
                <span className="text-sm">{selectedCountry.code}</span>
                <svg className="w-4 h-4 ml-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isOpen && (
                <div className="absolute z-10 bottom-full mb-2 w-80 bg-white border rounded-md shadow-lg">
                    <div className="p-2 border-b">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search countries..."
                                className="w-full pl-9 pr-3 py-1.5 border rounded-md text-sm outline-none focus:ring-1 focus:ring-purple-500"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                autoFocus
                            />
                        </div>
                    </div>
                    <ul className="max-h-60 overflow-y-auto">
                        {filteredCountries.map(country => (
                            <li
                                key={country.name}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    onCountrySelect(country); // Use the function passed in props
                                    setIsOpen(false);
                                    setSearchTerm("");
                                }}
                            >
                                <img src={`https://flagcdn.com/w20/${country.iso.toLowerCase()}.png`} alt={country.name} className="w-5 h-auto mr-3 rounded-sm" />
                                <span className="flex-grow">{country.name} ({country.localName})</span>
                                <span className="ml-auto text-gray-500">{country.code}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

// --- Lightbox Component ---
const Lightbox: React.FC<{ images: string[]; currentIndex: number; onClose: () => void; onNext: () => void; onPrev: () => void; }> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowRight') onNext();
            else if (event.key === 'ArrowLeft') onPrev();
            else if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onNext, onPrev, onClose]);

    return (
        <div className="fixed inset-0 bg-black/90 z-50" onClick={onClose}>
            <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="absolute top-4 right-6 text-white text-4xl font-bold hover:text-gray-300 z-30">&times;</button>
            
            <button 
                onClick={(e) => { e.stopPropagation(); onPrev(); }} 
                className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/40 rounded-full hover:bg-black/60 transition-colors duration-300 z-20"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <Image 
                src={images[currentIndex]} 
                alt="Property full view"
                width={1920}
                height={1080}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[90vw] max-h-[85vh] object-contain w-auto h-auto"
                priority
                onClick={(e) => e.stopPropagation()} 
            />
            
            <button 
                onClick={(e) => { e.stopPropagation(); onNext(); }} 
                className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-black/40 rounded-full hover:bg-black/60 transition-colors duration-300 z-20"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    );
};


// --- MAIN CLIENT COMPONENT ---
export default function PlotDetailClient({ plot }: { plot: Plot }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: `I am interested in this property: ${plot.title}`,
    });
    const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.iso === "AE") || countries[0]);
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const allImages = [...plot.images, ...plot.galleryImages];

    const openLightbox = (index: number) => {
        setLightboxImageIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const nextLightboxImage = () => {
        setLightboxImageIndex(prev => (prev + 1) % allImages.length);
    };

    const prevLightboxImage = () => {
        setLightboxImageIndex(prev => (prev - 1 + allImages.length) % allImages.length);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage('');

        const fullPhoneNumber = `${selectedCountry.code} ${formData.phone}`;

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: fullPhoneNumber,
                    message: formData.message,
                    subject: `Property Inquiry: ${plot.title}`,
                }),
            });

            const result = await response.json();
            setStatusMessage(result.message);

            if (response.ok) {
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    message: `I am interested in this property: ${plot.title}`,
                });
            }
        } catch (error) {
            setStatusMessage('An error occurred while sending the message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleNextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % plot.images.length);
    };

    const handlePrevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + plot.images.length) % plot.images.length);
    };

    return (
        <>
            <div className="bg-white font-sans text-[#333]">
                {/* --- HERO IMAGE CAROUSEL --- */}
                <div className="relative w-full h-[40vh] md:h-[65vh] overflow-hidden group">
                    <div 
                        className="w-full h-full whitespace-nowrap transition-transform duration-500 ease-in-out" 
                        style={{ transform: `translateX(${-currentIndex * 100}%)`}}
                    >
                        {plot.images.map((src, index) => (
                            <div 
                                className="inline-block w-full h-full relative cursor-pointer" 
                                key={index}
                                onClick={() => openLightbox(index)}
                            >
                                <Image src={src} alt={`${plot.title} image ${index + 1}`} layout="fill" objectFit="cover" priority={index === 0} />
                            </div>
                        ))}
                    </div>
                    <button onClick={(e) => { e.stopPropagation(); handlePrevImage(); }} className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-sm text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100 z-10">
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); handleNextImage(); }} className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-sm text-white hover:bg-black/60 transition opacity-0 group-hover:opacity-100 z-10">
                        <ChevronRight className="w-6 h-6" />
                    </button>
                    <div 
                        className="absolute top-4 right-4 bg-black/40 p-2 rounded-sm text-white hover:bg-black/60 transition cursor-pointer z-10"
                        onClick={() => openLightbox(currentIndex)}
                    >
                        <Maximize className="w-5 h-5" />
                    </div>
                </div>

                {/* This wrapper centers the content block below the hero */}
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
                        {/* --- LEFT (MAIN CONTENT) COLUMN --- */}
                        <div className="lg:col-span-2">
                            
                            {/* --- BREADCRUMBS --- */}
                            <div className="text-sm text-gray-500 mb-6">
                                Home / Land / {plot.title}
                            </div>

                            {/* --- HEADER --- */}
                            <div className="flex flex-col md:flex-row justify-between md:items-start border-b pb-4 mb-6">
                                <div>
                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{plot.title}</h1>
                                    <div className="flex items-center text-gray-500 mt-2 space-x-4">
                                        <span className="bg-gray-700 text-white text-xs font-semibold px-2.5 py-1 rounded-sm">{plot.status.toUpperCase()}</span>
                                        <div className="flex items-center"><MapPin className="w-4 h-4 mr-1.5" /><span>{plot.location}</span></div>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0 text-left md:text-right flex-shrink-0">
                                    <p className="text-2xl md:text-3xl font-bold text-gray-900">{plot.price}</p>
                                    <button className="p-2 border rounded-md mt-2 hover:bg-gray-100">
                                        <Share2 className="w-5 h-5 text-gray-600" />
                                    </button>
                                </div>
                            </div>
                            
                            {/* --- DETAILS SECTION --- */}
                            <Section title="Details">
                                <div className="flex items-center text-xs text-gray-500 mb-4">
                                    <CalendarDays className="w-3.5 h-3.5 mr-1.5" /> Updated on {plot.updatedOn}
                                </div>
                                <div className="border border-green-200 bg-green-50/50 rounded-md p-6 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                                    <DetailItem label="Property ID:" value={plot.propertyId} />
                                    <DetailItem label="Property Size:" value={plot.size} />
                                    <DetailItem label="Price:" value={plot.price} />
                                    <DetailItem label="Property Type:" value={plot.propertyType} />
                                    <DetailItem label="City, Dubai:" value={plot.location} />
                                    <DetailItem label="Property Status:" value={plot.status} />
                                </div>
                            </Section>

                            {/* --- DESCRIPTION SECTION --- */}
                            <Section title="Description">
                                <div className="text-gray-700 space-y-6 leading-relaxed">
                                    <p>{plot.mainDescription}</p>
                                    <h3 className="text-lg font-bold text-gray-800 pt-2">Property Details:</h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        {plot.propertyDetails.map(item => <li key={item.label}><strong>{item.label}:</strong> {item.value}</li>)}
                                    </ul>
                                    <h3 className="text-lg font-bold text-gray-800 pt-2">About {plot.location}:</h3>
                                    <p>{plot.aboutLocation}</p>
                                    <h3 className="text-lg font-bold text-gray-800 pt-2">Key Features & Nearby Landmarks:</h3>
                                    <ul className="list-disc list-inside space-y-1">
                                        {plot.keyFeatures.map(item => <li key={item.title}><strong>{item.title}:</strong> {item.text}</li>)}
                                    </ul>
                                </div>
                            </Section>

                            {/* --- ADDRESS SECTION --- */}
                            <Section title="Address">
                                <div className="grid grid-cols-2 border-t border-b divide-x">
                                    <AddressItem label="City" value={plot.city} />
                                    <AddressItem label="Area" value={plot.area} />
                                </div>
                            </Section>
                            
                            {/* --- GALLERY SECTION --- */}
                            <Section title="Gallery">
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {plot.galleryImages.map((src, index) => (
                                        <div 
                                            key={index} 
                                            className="relative w-full aspect-video rounded-md overflow-hidden cursor-pointer group/gallery"
                                            onClick={() => openLightbox(plot.images.length + index)}
                                        >
                                            <Image 
                                                src={src} 
                                                alt={`Gallery image ${index + 1}`} 
                                                layout="fill" 
                                                objectFit="cover" 
                                                className="transition-transform duration-300 group-hover/gallery:scale-110"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </Section>
                            
                            {/* --- ABOUT COMMUNITY SECTION --- */}
                            {plot.communityFeatures && (
                                <Section title={`About ${plot.location}`}>
                                    <div className="text-gray-700 space-y-6 leading-relaxed">
                                        <p>{plot.communityFeatures.aboutText}</p>
                                        <h3 className="text-lg font-bold text-gray-800 pt-2">Community Features</h3>
                                        <ul className="space-y-4">
                                            {plot.communityFeatures.features.map(feature => (
                                                <li key={feature.title} className="flex items-start">
                                                    <span className="text-purple-500 font-bold mr-3 mt-1">•</span>
                                                    <div>
                                                        <strong>{feature.title}:</strong> {feature.text}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Section>
                            )}

                            {/* --- MAP SECTION (CONDITIONAL) --- */}
                            {plot.mapEmbedUrl && (
                                <Section title="Map">
                                    <div className="relative w-full h-[400px] rounded-md overflow-hidden border">
                                        <iframe
                                            src={plot.mapEmbedUrl}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen={false}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </Section>
                            )}
                        </div>

                        {/* --- RIGHT (SIDEBAR) COLUMN --- */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="sticky top-8 border rounded-lg p-6 shadow-sm">
                  <div className="flex items-start pb-4 border-b">
                    <div className="bg-gray-200 p-4 rounded-md mr-4">
                        <User className="w-8 h-8 text-gray-500" />
                    </div>
                    <div>
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-2 text-gray-500" />
                          <p className="font-semibold text-gray-800">BizVibez Properties</p>
                        </div>
                        <a href="#" className="text-sm text-[#891e6d] hover:underline ml-6">View Listings</a>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4 pt-6">
                    <input type="text" name="fullName" placeholder="Full Name" required className="w-full border p-3 rounded-md text-sm focus:ring-1 focus:ring-[#891e6d] outline-none" value={formData.fullName} onChange={handleChange} />
                    <input type="email" name="email" placeholder="Email" required className="w-full border p-3 rounded-md text-sm focus:ring-1 focus:ring-[#891e6d] outline-none" value={formData.email} onChange={handleChange} />
                    <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-[#891e6d]">
                      <CountryCodePicker selectedCountry={selectedCountry} onCountrySelect={setSelectedCountry} />
                      <input type="tel" name="phone" placeholder="050 123 4567" required className="w-full p-3 text-sm placeholder:text-gray-400 outline-none rounded-r-md" value={formData.phone} onChange={handleChange} />
                    </div>
                    <textarea name="message" placeholder="I am interested in this property" rows={4} required className="w-full border p-3 rounded-md text-sm focus:ring-1 focus:ring-[#891e6d] outline-none" value={formData.message} onChange={handleChange}></textarea>
                    
                    {/* Add this block to show success/error messages */}
                    {statusMessage && (
                      <div className={`p-3 text-center rounded-md text-sm ${statusMessage.toLowerCase().includes('error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                        {statusMessage}
                      </div>
                    )}

                    <button type="submit" disabled={loading} className="w-full bg-[#891e6d] text-white font-bold py-3 rounded-md hover:bg-[#721a5a] transition-colors disabled:opacity-70">
                      {loading ? 'Sending...' : 'Request Information'}
                    </button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
            {isLightboxOpen && (
                <Lightbox 
                    images={allImages}
                    currentIndex={lightboxImageIndex}
                    onClose={closeLightbox}
                    onNext={nextLightboxImage}
                    onPrev={prevLightboxImage}
                />
            )}
        </>
    );
}

// --- HELPER COMPONENTS ---
const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-3 mb-6">{title}</h2>
        {children}
    </div>
);

const DetailItem = ({ label, value }: { label: string, value: string }) => (
    <div>
        <p className="font-semibold text-gray-800">{label}</p>
        <p className="text-gray-600">{value}</p>
    </div>
);

const AddressItem = ({ label, value }: { label: string, value: string }) => (
    <div className="py-4 px-2">
        <p className="font-bold text-gray-800 text-sm">{label}</p>
        <p className="text-gray-600 text-base">{value}</p>
    </div>
);