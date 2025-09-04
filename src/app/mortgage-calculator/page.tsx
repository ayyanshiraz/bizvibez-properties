"use client"; // This page requires client-side interactivity

import { useState, useMemo, useEffect } from 'react';

// --- Configuration for Mortgage Rates ---
const mortgageRates = {
  'uae-national': 4.24,
  'uae-resident': 3.89,
  'non-resident': 4.59,
};

// --- Configuration for Minimum Down Payment Percentages ---
const minDownPaymentPercent = {
  'uae-national': 20,
  'uae-resident': 20,
  'non-resident': 25,
};

export default function MortgageCalculatorPage() {
  const [propertyPrice, setPropertyPrice] = useState(1200000);
  const [residency, setResidency] = useState<'uae-national' | 'uae-resident' | 'non-resident'>('uae-resident');
  const [downPayment, setDownPayment] = useState(240000); // State for the actual down payment value
  const [loanDuration, setLoanDuration] = useState(25);

  const annualRate = mortgageRates[residency];
  const minDPPercent = minDownPaymentPercent[residency];
  const minDPValue = (propertyPrice * minDPPercent) / 100;

  // --- DERIVED AND MEMOIZED VALUES ---
  const downPaymentPercent = useMemo(() => {
    if (propertyPrice === 0) return 0;
    return Math.round((downPayment / propertyPrice) * 100);
  }, [downPayment, propertyPrice]);

  const financeAmount = useMemo(() => {
    return propertyPrice - downPayment;
  }, [propertyPrice, downPayment]);

  const monthlyPayment = useMemo(() => {
    const monthlyRate = annualRate / 12 / 100;
    const numberOfPayments = loanDuration * 12;
    const principal = financeAmount;

    if (principal <= 0 || monthlyRate <= 0 || numberOfPayments <= 0) return 0;

    const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments);
    const denominator = Math.pow(1 + monthlyRate, numberOfPayments) - 1;

    return numerator / denominator;
  }, [financeAmount, loanDuration, annualRate]);

  // --- EFFECTS TO HANDLE LOGIC ---

  // Adjust down payment when property price or residency changes
  useEffect(() => {
    const newMinDP = (propertyPrice * minDPPercent) / 100;
    if (downPayment < newMinDP) {
      setDownPayment(newMinDP);
    }
  }, [propertyPrice, residency, minDPPercent]);

  // --- HANDLERS FOR MANUAL INPUT ---

  const handlePropertyPriceInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/,/g, ''), 10);
    if (!isNaN(value)) {
      setPropertyPrice(value);
    }
  };

  const handleDownPaymentInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/,/g, ''), 10);
    if (!isNaN(value)) {
        // Cap the down payment at 80% of the property price
        const maxDP = propertyPrice * 0.8;
        setDownPayment(Math.min(value, maxDP));
    }
  };
  
  const handleLoanDurationInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value.replace(/,/g, ''), 10);
     if (!isNaN(value) && value >= 5 && value <= 30) {
      setLoanDuration(value);
    }
  };

  return (
    <div className="bg-gray-50">
      {/* --- Top Banner --- */}
      <section className="border-b border-gray-200">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <p className="text-lg text-gray-700">
            Need More Help? <span className="font-semibold" style={{ color: '#891e6d' }}>+971 54 201 9999</span>
          </p>
          <a href="/contact" className="bg-[#891e6d] text-white font-bold py-2 px-6 rounded-md hover:opacity-90 transition-opacity">
            GET IN TOUCH
          </a>
        </div>
      </section>

      {/* --- Main Calculator Section --- */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* --- Calculator Inputs --- */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800">Mortgage Calculator</h2>
              <p className="text-gray-500 mb-8">Get The Right Mortgage For You</p>
              
              {/* Property Price */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Property Price</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={propertyPrice.toLocaleString()} 
                    onChange={handlePropertyPriceInput}
                    className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 pr-16" 
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">AED</span>
                </div>
                <input 
                  type="range" 
                  min="300000" 
                  max="35000000" 
                  step="50000"
                  value={propertyPrice}
                  onChange={(e) => setPropertyPrice(Number(e.target.value))}
                  className="w-full mt-2 accent-[#891e6d]" 
                />
              </div>
              
              {/* Residency Status */}
              <div className="mb-6">
                 <label className="block text-gray-700 font-semibold mb-2">Residency status</label>
                 <div className="flex border border-gray-300 rounded-md overflow-hidden">
                    <button 
                      onClick={() => setResidency('uae-national')}
                      className={`w-1/3 py-2 text-sm transition-colors duration-300 ${residency === 'uae-national' ? 'bg-[#891e6d] text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    >
                      UAE national
                    </button>
                     <button 
                      onClick={() => setResidency('uae-resident')}
                      className={`w-1/3 py-2 text-sm border-l border-r transition-colors duration-300 ${residency === 'uae-resident' ? 'bg-[#891e6d] text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    >
                      UAE resident
                    </button>
                     <button 
                      onClick={() => setResidency('non-resident')}
                      className={`w-1/3 py-2 text-sm transition-colors duration-300 ${residency === 'non-resident' ? 'bg-[#891e6d] text-white' : 'bg-white text-gray-600 hover:bg-gray-100'}`}
                    >
                      Non-resident
                    </button>
                 </div>
              </div>

              {/* Down Payment */}
              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Down payment ({downPaymentPercent}%)</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={downPayment.toLocaleString()} 
                    onChange={handleDownPaymentInput}
                    onBlur={() => { if(downPayment < minDPValue) setDownPayment(minDPValue) }}
                    className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 pr-16" 
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">AED</span>
                </div>
                <input 
                  type="range" 
                  min={minDPValue} 
                  max={propertyPrice * 0.8}
                  value={downPayment}
                  onChange={(e) => setDownPayment(Number(e.target.value))}
                  className="w-full mt-2 accent-[#891e6d]" 
                />
              </div>

              {/* Loan Duration */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Loan duration</label>
                <div className="relative">
                  <input 
                    type="text" 
                    value={loanDuration} 
                    onChange={handleLoanDurationInput}
                    className="w-full p-3 bg-gray-100 rounded-md border border-gray-300 pr-16" 
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">Years</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="30" 
                  value={loanDuration}
                  onChange={(e) => setLoanDuration(Number(e.target.value))}
                  className="w-full mt-2 accent-[#891e6d]" 
                />
              </div>
            </div>

            {/* --- Results Display --- */}
            <div className="bg-[#fdf9f3] p-8 rounded-2xl shadow-lg text-center border border-gray-200">
                <p className="text-gray-600">Your Estimated Monthly Payment</p>
                <h3 className="text-5xl font-bold my-4" style={{ color: '#891e6d' }}>
                  {monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })} AED
                </h3>
                <p className="text-gray-600 text-sm">
                  Estimated Monthly Payment Based On <strong className="text-gray-800">{financeAmount.toLocaleString()} AED</strong> Finance Amount With A <strong className="text-gray-800">{annualRate}%</strong> Fixed Finance Rate.
                </p>
                 <p className="text-xs text-gray-500 mt-4">
                  <strong>Disclaimer:</strong> Rates May Vary Based On Bank Policies. T&C's Apply
                </p>
                <a href="/contact" className="mt-8 inline-block w-full bg-[#891e6d] text-white font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity">
                  GET A MORTGAGE QUOTE
                </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

