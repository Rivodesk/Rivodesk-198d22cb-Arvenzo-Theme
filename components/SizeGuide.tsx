'use client';

import { useState } from 'react';
import { X, Ruler } from 'lucide-react';

const SIZES = [
  { size: 'XS',  chest: '86–91', length: '65', shoulder: '41' },
  { size: 'S',   chest: '91–96', length: '67', shoulder: '43' },
  { size: 'M',   chest: '96–101', length: '70', shoulder: '45' },
  { size: 'L',   chest: '101–106', length: '72', shoulder: '47' },
  { size: 'XL',  chest: '106–111', length: '74', shoulder: '49' },
  { size: 'XXL', chest: '111–116', length: '76', shoulder: '51' },
  { size: '3XL', chest: '116–121', length: '78', shoulder: '53' },
  { size: '4XL', chest: '121–126', length: '80', shoulder: '55' },
  { size: '5XL', chest: '126–131', length: '82', shoulder: '57' },
];

export default function SizeGuide() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 text-[13px] font-sans text-arvenzo-brown underline underline-offset-2 hover:text-arvenzo-orange transition-colors"
      >
        <Ruler size={13} />
        Maatgids
      </button>

      {/* Modal */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-50 bg-arvenzo-dark/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setOpen(false)}
          />
          <div className="fixed z-50 inset-x-4 top-1/2 -translate-y-1/2 max-w-xl mx-auto bg-arvenzo-cream rounded-3xl shadow-2xl animate-fade-up overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-arvenzo-cream-dark">
              <div>
                <h2 className="font-heading font-bold text-arvenzo-ink text-lg">Maatgids</h2>
                <p className="text-xs text-arvenzo-muted font-sans mt-0.5">Alle maten in centimeter (cm)</p>
              </div>
              <button onClick={() => setOpen(false)} className="p-2 text-arvenzo-muted hover:text-arvenzo-ink rounded-full hover:bg-arvenzo-cream-dark transition-all">
                <X size={18} />
              </button>
            </div>

            <div className="p-6 overflow-x-auto">
              {/* How to measure */}
              <div className="bg-arvenzo-cream-dark rounded-2xl p-4 mb-5 text-sm font-sans text-arvenzo-muted">
                <p className="font-semibold text-arvenzo-ink mb-1">Hoe meten?</p>
                <p>🔵 <strong>Borst:</strong> Meet rondom het breedste deel van je borst.</p>
                <p>📏 <strong>Lengte:</strong> Van nek tot onderkant achterkant.</p>
                <p>👣 <strong>Schouder:</strong> Van schoudernaad tot schoudernaad.</p>
              </div>

              <table className="w-full text-sm font-sans border-collapse">
                <thead>
                  <tr className="border-b border-arvenzo-cream-dark">
                    <th className="text-left py-2.5 pr-4 font-heading font-semibold text-arvenzo-ink">Maat</th>
                    <th className="text-left py-2.5 pr-4 font-heading font-semibold text-arvenzo-ink">Borst (cm)</th>
                    <th className="text-left py-2.5 pr-4 font-heading font-semibold text-arvenzo-ink">Lengte (cm)</th>
                    <th className="text-left py-2.5 font-heading font-semibold text-arvenzo-ink">Schouder (cm)</th>
                  </tr>
                </thead>
                <tbody>
                  {SIZES.map((row, i) => (
                    <tr key={row.size} className={`border-b border-arvenzo-cream-dark/50 ${i % 2 === 0 ? '' : 'bg-arvenzo-cream-dark/40'}`}>
                      <td className="py-2.5 pr-4 font-heading font-bold text-arvenzo-brown">{row.size}</td>
                      <td className="py-2.5 pr-4 text-arvenzo-ink">{row.chest}</td>
                      <td className="py-2.5 pr-4 text-arvenzo-ink">{row.length}</td>
                      <td className="py-2.5 text-arvenzo-ink">{row.shoulder}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="text-xs text-arvenzo-muted font-sans mt-4">
                Bij twijfel raden we aan een maat groter te kiezen. De hoodies en sweatshirts vallen normaal tot slim fit.
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
}
