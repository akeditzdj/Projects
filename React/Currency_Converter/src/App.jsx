import React, { useState, useEffect } from "react";
import "./App.css";
import banner from "./assets/cc.webp";
import axios from "axios";


function App() {
  const [amount, setAmount] = useState("1");
  const [fromCurrency, setFromCurency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);

  useEffect(() => {
    const getExchangeRate = async () => {
      try {
        let url = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;
        const response = await axios.get(url);
        setExchangeRate(response.data.rates[toCurrency]);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    };
    getExchangeRate();
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    if (exchangeRate !== null) {
      setConvertedAmount((amount * exchangeRate).toFixed(2));
    }
  }, [amount, exchangeRate]);

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleFromCrrencyChange = (e) => {
    setFromCurency(e.target.value);
  };
  const handleToCrrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  return (
    <>
      <div className="app-container">
        <div className="headder">
          <img src={banner} alt="" />
        </div>
        <div className="content">
          <h1>Currency Converter</h1>
          <div className="input-group">
            <label htmlFor="amt">Amount:</label>
            <input
              type="number"
              id="amt"
              placeholder="Enter your amount value"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="fromCurrency">From Currency:</label>
            <select
              id="fromCurrency"
              value={fromCurrency}
              onChange={handleFromCrrencyChange}
            >
              <option value="AFN">Afghan Afghani (AFN)</option>
              <option value="ALL">Albanian Lek (ALL)</option>
              <option value="DZD">Algerian Dinar (DZD)</option>
              <option value="AOA">Angolan Kwanza (AOA)</option>
              <option value="ARS">Argentine Peso (ARS)</option>
              <option value="AMD">Armenian Dram (AMD)</option>
              <option value="AUD">Australian Dollar (AUD)</option>
              <option value="AZN">Azerbaijani Manat (AZN)</option>
              <option value="BSD">Bahamian Dollar (BSD)</option>
              <option value="BHD">Bahraini Dinar (BHD)</option>
              <option value="BDT">Bangladeshi Taka (BDT)</option>
              <option value="BBD">Barbadian Dollar (BBD)</option>
              <option value="BYN">Belarusian Ruble (BYN)</option>
              <option value="BZD">Belize Dollar (BZD)</option>
              <option value="XOF">CFA Franc BCEAO (XOF)</option>
              <option value="BMD">Bermudian Dollar (BMD)</option>
              <option value="BTN">Bhutanese Ngultrum (BTN)</option>
              <option value="BOB">Bolivian Boliviano (BOB)</option>
              <option value="BRL">Brazilian Real (BRL)</option>
              <option value="BND">Brunei Dollar (BND)</option>
              <option value="BGN">Bulgarian Lev (BGN)</option>
              <option value="MMK">Burmese Kyat (MMK)</option>
              <option value="BIF">Burundian Franc (BIF)</option>
              <option value="CAD">Canadian Dollar (CAD)</option>
              <option value="CVE">Cape Verdean Escudo (CVE)</option>
              <option value="KYD">Cayman Islands Dollar (KYD)</option>
              <option value="XAF">CFA Franc BEAC (XAF)</option>
              <option value="CLP">Chilean Peso (CLP)</option>
              <option value="CNY">Chinese Yuan (CNY)</option>
              <option value="COP">Colombian Peso (COP)</option>
              <option value="KMF">Comorian Franc (KMF)</option>
              <option value="CDF">Congolese Franc (CDF)</option>
              <option value="CRC">Costa Rican Colón (CRC)</option>
              <option value="HRK">Croatian Kuna (HRK)</option>
              <option value="CUP">Cuban Peso (CUP)</option>
              <option value="CUP">Cuban Convertible Peso (CUC)</option>
              <option value="CZK">Czech Koruna (CZK)</option>
              <option value="DKK">Danish Krone (DKK)</option>
              <option value="DJF">Djiboutian Franc (DJF)</option>
              <option value="DOP">Dominican Peso (DOP)</option>
              <option value="EGP">Egyptian Pound (EGP)</option>
              <option value="SVC">El Salvador Colon (SVC)</option>
              <option value="ERN">Eritrean Nakfa (ERN)</option>
              <option value="EEK">Estonian Kroon (EEK)</option>
              <option value="ETB">Ethiopian Birr (ETB)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="FKP">Falkland Islands Pound (FKP)</option>
              <option value="FJD">Fijian Dollar (FJD)</option>
              <option value="GMD">Gambian Dalasi (GMD)</option>
              <option value="GEL">Georgian Lari (GEL)</option>
              <option value="GHS">Ghanaian Cedi (GHS)</option>
              <option value="GIP">Gibraltar Pound (GIP)</option>
              <option value="GTQ">Guatemalan Quetzal (GTQ)</option>
              <option value="GNF">Guinean Franc (GNF)</option>
              <option value="GYD">Guyanese Dollar (GYD)</option>
              <option value="HTG">Haitian Gourde (HTG)</option>
              <option value="HNL">Honduran Lempira (HNL)</option>
              <option value="HKD">Hong Kong Dollar (HKD)</option>
              <option value="HUF">Hungarian Forint (HUF)</option>
              <option value="ISK">Icelandic Króna (ISK)</option>
              <option value="INR">Indian Rupee (INR)</option>
              <option value="IDR">Indonesian Rupiah (IDR)</option>
              <option value="IRR">Iranian Rial (IRR)</option>
              <option value="IQD">Iraqi Dinar (IQD)</option>
              <option value="ILS">Israeli New Shekel (ILS)</option>
              <option value="JMD">Jamaican Dollar (JMD)</option>
              <option value="JPY">Japanese Yen (JPY)</option>
              <option value="JOD">Jordanian Dinar (JOD)</option>
              <option value="KZT">Kazakhstani Tenge (KZT)</option>
              <option value="KES">Kenyan Shilling (KES)</option>
              <option value="KWD">Kuwaiti Dinar (KWD)</option>
              <option value="KGS">Kyrgyzstani Som (KGS)</option>
              <option value="LAK">Lao Kip (LAK)</option>
              <option value="LVL">Latvian Lats (LVL)</option>
              <option value="LBP">Lebanese Pound (LBP)</option>
              <option value="LSL">Lesotho Loti (LSL)</option>
              <option value="LRD">Liberian Dollar (LRD)</option>
              <option value="LYD">Libyan Dinar (LYD)</option>
              <option value="CHF">Swiss Franc (CHF)</option>
              <option value="MOP">Macanese Pataca (MOP)</option>
              <option value="MKD">Macedonian Denar (MKD)</option>
              <option value="MGA">Malagasy Ariary (MGA)</option>
              <option value="MWK">Malawian Kwacha (MWK)</option>
              <option value="MYR">Malaysian Ringgit (MYR)</option>
              <option value="MVR">Maldivian Rufiyaa (MVR)</option>
              <option value="MRU">Mauritanian Ouguiya (MRU)</option>
              <option value="MUR">Mauritian Rupee (MUR)</option>
              <option value="MXN">Mexican Peso (MXN)</option>
              <option value="MDL">Moldovan Leu (MDL)</option>
              <option value="MNT">Mongolian Tögrög (MNT)</option>
              <option value="MAD">Moroccan Dirham (MAD)</option>
              <option value="MZN">Mozambican Metical (MZN)</option>
              <option value="NAD">Namibian Dollar (NAD)</option>
              <option value="NPR">Nepalese Rupee (NPR)</option>
              <option value="ANG">Netherlands Antillean Guilder (ANG)</option>
              <option value="NZD">New Zealand Dollar (NZD)</option>
              <option value="NIO">Nicaraguan Córdoba (NIO)</option>
              <option value="NGN">Nigerian Naira (NGN)</option>
              <option value="KPW">North Korean Won (KPW)</option>
              <option value="NOK">Norwegian Krone (NOK)</option>
              <option value="OMR">Omani Rial (OMR)</option>
              <option value="PKR">Pakistani Rupee (PKR)</option>
              <option value="PAB">Panamanian Balboa (PAB)</option>
              <option value="PYG">Paraguayan Guaraní (PYG)</option>
              <option value="PEN">Peruvian Sol (PEN)</option>
              <option value="PHP">Philippine Peso (PHP)</option>
              <option value="PLN">Polish Zloty (PLN)</option>
              <option value="QAR">Qatari Rial (QAR)</option>
              <option value="RON">Romanian Leu (RON)</option>
              <option value="RUB">Russian Ruble (RUB)</option>
              <option value="RWF">Rwandan Franc (RWF)</option>
              <option value="SHP">Saint Helena Pound (SHP)</option>
              <option value="XCD">East Caribbean Dollar (XCD)</option>
              <option value="SAR">Saudi Riyal (SAR)</option>
              <option value="RSD">Serbian Dinar (RSD)</option>
              <option value="SCR">Seychellois Rupee (SCR)</option>
              <option value="SGD">Singapore Dollar (SGD)</option>
              <option value="SLL">Sierra Leonean Leone (SLL)</option>
              <option value="XDR">Special Drawing Rights (XDR)</option>
              <option value="SZL">Swazi Lilangeni (SZL)</option>
              <option value="SEK">Swedish Krona (SEK)</option>
              <option value="CHF">Swiss Franc (CHF)</option>
              <option value="TWD">New Taiwan Dollar (TWD)</option>
              <option value="TJS">Tajikistani Somoni (TJS)</option>
              <option value="TZS">Tanzanian Shilling (TZS)</option>
              <option value="THB">Thai Baht (THB)</option>
              <option value="TOP">Tongan Paʻanga (TOP)</option>
              <option value="TTD">Trinidad and Tobago Dollar (TTD)</option>
              <option value="TND">Tunisian Dinar (TND)</option>
              <option value="TRY">Turkish Lira (TRY)</option>
              <option value="TMT">Turkmenistani Manat (TMT)</option>
              <option value="UGX">Ugandan Shilling (UGX)</option>
              <option value="UAH">Ukrainian Hryvnia (UAH)</option>
              <option value="AED">United Arab Emirates Dirham (AED)</option>
              <option value="GBP">British Pound Sterling (GBP)</option>
              <option value="USD">United States Dollar (USD)</option>
              <option value="UYU">Uruguayan Peso (UYU)</option>
              <option value="UZS">Uzbekistani Som (UZS)</option>
              <option value="VUV">Vanuatu Vatu (VUV)</option>
              <option value="VES">Venezuelan Bolívar (VES)</option>
              <option value="VND">Vietnamese Dong (VND)</option>
              <option value="YER">Yemeni Rial (YER)</option>
              <option value="ZMW">Zambian Kwacha (ZMW)</option>
              <option value="ZWL">Zimbabwean Dollar (ZWL)</option>
            </select>
          </div>
          <div className="input-group">
            <label htmlFor="toCurrency">To Currency:</label>
            <select
              id="toCurrency"
              value={toCurrency}
              onChange={handleToCrrencyChange}
            >
              <option value="AFN">Afghan Afghani (AFN)</option>
              <option value="ALL">Albanian Lek (ALL)</option>
              <option value="DZD">Algerian Dinar (DZD)</option>
              <option value="AOA">Angolan Kwanza (AOA)</option>
              <option value="ARS">Argentine Peso (ARS)</option>
              <option value="AMD">Armenian Dram (AMD)</option>
              <option value="AUD">Australian Dollar (AUD)</option>
              <option value="AZN">Azerbaijani Manat (AZN)</option>
              <option value="BSD">Bahamian Dollar (BSD)</option>
              <option value="BHD">Bahraini Dinar (BHD)</option>
              <option value="BDT">Bangladeshi Taka (BDT)</option>
              <option value="BBD">Barbadian Dollar (BBD)</option>
              <option value="BYN">Belarusian Ruble (BYN)</option>
              <option value="BZD">Belize Dollar (BZD)</option>
              <option value="XOF">CFA Franc BCEAO (XOF)</option>
              <option value="BMD">Bermudian Dollar (BMD)</option>
              <option value="BTN">Bhutanese Ngultrum (BTN)</option>
              <option value="BOB">Bolivian Boliviano (BOB)</option>
              <option value="BRL">Brazilian Real (BRL)</option>
              <option value="BND">Brunei Dollar (BND)</option>
              <option value="BGN">Bulgarian Lev (BGN)</option>
              <option value="MMK">Burmese Kyat (MMK)</option>
              <option value="BIF">Burundian Franc (BIF)</option>
              <option value="CAD">Canadian Dollar (CAD)</option>
              <option value="CVE">Cape Verdean Escudo (CVE)</option>
              <option value="KYD">Cayman Islands Dollar (KYD)</option>
              <option value="XAF">CFA Franc BEAC (XAF)</option>
              <option value="CLP">Chilean Peso (CLP)</option>
              <option value="CNY">Chinese Yuan (CNY)</option>
              <option value="COP">Colombian Peso (COP)</option>
              <option value="KMF">Comorian Franc (KMF)</option>
              <option value="CDF">Congolese Franc (CDF)</option>
              <option value="CRC">Costa Rican Colón (CRC)</option>
              <option value="HRK">Croatian Kuna (HRK)</option>
              <option value="CUP">Cuban Peso (CUP)</option>
              <option value="CUP">Cuban Convertible Peso (CUC)</option>
              <option value="CZK">Czech Koruna (CZK)</option>
              <option value="DKK">Danish Krone (DKK)</option>
              <option value="DJF">Djiboutian Franc (DJF)</option>
              <option value="DOP">Dominican Peso (DOP)</option>
              <option value="EGP">Egyptian Pound (EGP)</option>
              <option value="SVC">El Salvador Colon (SVC)</option>
              <option value="ERN">Eritrean Nakfa (ERN)</option>
              <option value="EEK">Estonian Kroon (EEK)</option>
              <option value="ETB">Ethiopian Birr (ETB)</option>
              <option value="EUR">Euro (EUR)</option>
              <option value="FKP">Falkland Islands Pound (FKP)</option>
              <option value="FJD">Fijian Dollar (FJD)</option>
              <option value="GMD">Gambian Dalasi (GMD)</option>
              <option value="GEL">Georgian Lari (GEL)</option>
              <option value="GHS">Ghanaian Cedi (GHS)</option>
              <option value="GIP">Gibraltar Pound (GIP)</option>
              <option value="GTQ">Guatemalan Quetzal (GTQ)</option>
              <option value="GNF">Guinean Franc (GNF)</option>
              <option value="GYD">Guyanese Dollar (GYD)</option>
              <option value="HTG">Haitian Gourde (HTG)</option>
              <option value="HNL">Honduran Lempira (HNL)</option>
              <option value="HKD">Hong Kong Dollar (HKD)</option>
              <option value="HUF">Hungarian Forint (HUF)</option>
              <option value="ISK">Icelandic Króna (ISK)</option>
              <option value="INR">Indian Rupee (INR)</option>
              <option value="IDR">Indonesian Rupiah (IDR)</option>
              <option value="IRR">Iranian Rial (IRR)</option>
              <option value="IQD">Iraqi Dinar (IQD)</option>
              <option value="ILS">Israeli New Shekel (ILS)</option>
              <option value="JMD">Jamaican Dollar (JMD)</option>
              <option value="JPY">Japanese Yen (JPY)</option>
              <option value="JOD">Jordanian Dinar (JOD)</option>
              <option value="KZT">Kazakhstani Tenge (KZT)</option>
              <option value="KES">Kenyan Shilling (KES)</option>
              <option value="KWD">Kuwaiti Dinar (KWD)</option>
              <option value="KGS">Kyrgyzstani Som (KGS)</option>
              <option value="LAK">Lao Kip (LAK)</option>
              <option value="LVL">Latvian Lats (LVL)</option>
              <option value="LBP">Lebanese Pound (LBP)</option>
              <option value="LSL">Lesotho Loti (LSL)</option>
              <option value="LRD">Liberian Dollar (LRD)</option>
              <option value="LYD">Libyan Dinar (LYD)</option>
              <option value="CHF">Swiss Franc (CHF)</option>
              <option value="MOP">Macanese Pataca (MOP)</option>
              <option value="MKD">Macedonian Denar (MKD)</option>
              <option value="MGA">Malagasy Ariary (MGA)</option>
              <option value="MWK">Malawian Kwacha (MWK)</option>
              <option value="MYR">Malaysian Ringgit (MYR)</option>
              <option value="MVR">Maldivian Rufiyaa (MVR)</option>
              <option value="MRU">Mauritanian Ouguiya (MRU)</option>
              <option value="MUR">Mauritian Rupee (MUR)</option>
              <option value="MXN">Mexican Peso (MXN)</option>
              <option value="MDL">Moldovan Leu (MDL)</option>
              <option value="MNT">Mongolian Tögrög (MNT)</option>
              <option value="MAD">Moroccan Dirham (MAD)</option>
              <option value="MZN">Mozambican Metical (MZN)</option>
              <option value="NAD">Namibian Dollar (NAD)</option>
              <option value="NPR">Nepalese Rupee (NPR)</option>
              <option value="ANG">Netherlands Antillean Guilder (ANG)</option>
              <option value="NZD">New Zealand Dollar (NZD)</option>
              <option value="NIO">Nicaraguan Córdoba (NIO)</option>
              <option value="NGN">Nigerian Naira (NGN)</option>
              <option value="KPW">North Korean Won (KPW)</option>
              <option value="NOK">Norwegian Krone (NOK)</option>
              <option value="OMR">Omani Rial (OMR)</option>
              <option value="PKR">Pakistani Rupee (PKR)</option>
              <option value="PAB">Panamanian Balboa (PAB)</option>
              <option value="PYG">Paraguayan Guaraní (PYG)</option>
              <option value="PEN">Peruvian Sol (PEN)</option>
              <option value="PHP">Philippine Peso (PHP)</option>
              <option value="PLN">Polish Zloty (PLN)</option>
              <option value="QAR">Qatari Rial (QAR)</option>
              <option value="RON">Romanian Leu (RON)</option>
              <option value="RUB">Russian Ruble (RUB)</option>
              <option value="RWF">Rwandan Franc (RWF)</option>
              <option value="SHP">Saint Helena Pound (SHP)</option>
              <option value="XCD">East Caribbean Dollar (XCD)</option>
              <option value="SAR">Saudi Riyal (SAR)</option>
              <option value="RSD">Serbian Dinar (RSD)</option>
              <option value="SCR">Seychellois Rupee (SCR)</option>
              <option value="SGD">Singapore Dollar (SGD)</option>
              <option value="SLL">Sierra Leonean Leone (SLL)</option>
              <option value="XDR">Special Drawing Rights (XDR)</option>
              <option value="SZL">Swazi Lilangeni (SZL)</option>
              <option value="SEK">Swedish Krona (SEK)</option>
              <option value="CHF">Swiss Franc (CHF)</option>
              <option value="TWD">New Taiwan Dollar (TWD)</option>
              <option value="TJS">Tajikistani Somoni (TJS)</option>
              <option value="TZS">Tanzanian Shilling (TZS)</option>
              <option value="THB">Thai Baht (THB)</option>
              <option value="TOP">Tongan Paʻanga (TOP)</option>
              <option value="TTD">Trinidad and Tobago Dollar (TTD)</option>
              <option value="TND">Tunisian Dinar (TND)</option>
              <option value="TRY">Turkish Lira (TRY)</option>
              <option value="TMT">Turkmenistani Manat (TMT)</option>
              <option value="UGX">Ugandan Shilling (UGX)</option>
              <option value="UAH">Ukrainian Hryvnia (UAH)</option>
              <option value="AED">United Arab Emirates Dirham (AED)</option>
              <option value="GBP">British Pound Sterling (GBP)</option>
              <option value="USD">United States Dollar (USD)</option>
              <option value="UYU">Uruguayan Peso (UYU)</option>
              <option value="UZS">Uzbekistani Som (UZS)</option>
              <option value="VUV">Vanuatu Vatu (VUV)</option>
              <option value="VES">Venezuelan Bolívar (VES)</option>
              <option value="VND">Vietnamese Dong (VND)</option>
              <option value="YER">Yemeni Rial (YER)</option>
              <option value="ZMW">Zambian Kwacha (ZMW)</option>
              <option value="ZWL">Zimbabwean Dollar (ZWL)</option>
            </select>
          </div>
          <div className="result">
            <p>
              {amount} {fromCurrency} is equal to {convertedAmount} {toCurrency}
            </p>
          </div>
          <div className="footer">
            <p>
              &copy;Copyright <a href="https://akeditz.com">AK Editz</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
