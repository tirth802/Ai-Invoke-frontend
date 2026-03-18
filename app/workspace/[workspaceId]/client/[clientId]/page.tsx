'use client';
import { ClientData, ShippingPattern } from '@/features/client/types/client.types';
import { Building2, User, FileText,  Ship, ListFilter, X, Scale, Percent, } from 'lucide-react';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

export default function ClientDetailPage() {
    const { clientId} = useParams()
    const [data,setData]=useState<ClientData | null>(null)
    console.log(data)

    useEffect(()=>{
        fetch(`/api/clients/${clientId}`)
        .then((res)=>res.json())
        .then((json: ClientData)=>setData(json))
    },[clientId])
    if(!data){
        return<div>Loading Client Data....</div>
    }
        const getChartColor = (rate: number) => {
    if (rate >= 75) return '#22C55E'; // High
    if (rate >= 50) return '#F59E0B'; // Medium
    return '#EF4444'; // Low
        }
  const chartData = [{ value: data.winRate }, { value: 100 - data.winRate }];

  return(
    <div className="p-10 space-y-8 bg-[#F8FAFC] min-h-screen text-[#1E293B]">
      
      {/* 1. HEADER SECTION */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center shadow-sm">
          <Building2 className="text-blue-600" size={28} />
        </div>
        <div>
          <h1 className="text-2xl font-black tracking-tight">{data.name}</h1>
          <p className="text-[11px] text-slate-400 font-bold uppercase mt-0.5">Last activity: Jan 31, 2026</p>
          <button className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 mt-2">
            1 open requests
          </button>
        </div>
      </div>

      {/* 2. CONTACTS SECTION */}
      <section>
        <h3 className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
          <User size={14} /> Contacts
        </h3>
        <div className="grid grid-cols-4 gap-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          {[ 
            { label: 'Client Name', val: data.name },
            { label: 'Contact Person', val: data.contactPerson },
            { label: 'Contact Email', val: data.contactEmail, blue: true },
            { label: 'Domain/Industry', val: data.industry }
          ].map((item, i) => (
            <div key={i}>
              <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">{item.label}</p>
              <p className={`text-sm font-bold ${item.blue ? 'text-blue-600 underline' : 'text-slate-800'}`}>{item.val}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. PROFILE DATA (Chart with Legend) */}
      <section>
        <h3 className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
          <FileText size={14} /> Profile Data
        </h3>
        <div className="bg-white rounded-32px border border-slate-100 p-8 shadow-sm grid grid-cols-12 gap-10">
          <div className="col-span-4 flex flex-col items-center border-r border-slate-50 pr-8">
            <div className="relative w-55 h-55 ">
              {/* Legend Dots in Top Corner of Chart Area */}
              <div className="absolute top-1 right-0 flex flex-col gap-1 z-10">
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-slate-400"><div className="w-2 h-2 rounded-full bg-green-500"/>High</div>
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-slate-400"><div className="w-2 h-2 rounded-full bg-orange-400"/> Medium</div>
                <div className="flex items-center gap-1.5 text-[8px] font-bold text-slate-400"><div className="w-2 h-2 rounded-full bg-red-500"/> Low</div>
              </div>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={chartData} innerRadius={65} outerRadius={82} startAngle={90} endAngle={-270} dataKey="value" stroke="none" cornerRadius={10}>
                    <Cell fill={getChartColor(data.winRate)} />
                    <Cell fill="#F1F5F9" />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-black">{data.winRate}%</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Win rate</span>
              </div>
            </div>
            <p className="text-[10px] font-bold text-slate-400 mt-4 italic">Win Rate Based on quotes</p>
          </div>

          <div className="col-span-8 space-y-6">
            <div>
              <p className="text-[10px] text-slate-400 font-bold mb-3 uppercase tracking-widest">Preferred Carriers</p>
              <div className="flex flex-wrap gap-2">
                {data.carriers?.map((c: string) => (
                  <span key={c} className="px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-[11px] font-bold text-blue-700">{c}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-slate-400 font-bold mb-2 uppercase tracking-widest">Communication Style</p>
              <p className="text-xs leading-relaxed text-slate-500 font-medium">{data.communicationStyle}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MARGIN PREFERENCE (NEW SECTION) */}
      <section>
        <h3 className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
          <Percent size={14} /> Margin Preference
        </h3>
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-sm font-bold text-slate-400 italic">
          Not set
        </div>
      </section>

      {/* 5. MANUAL OVERRIDES (TAGS) */}
      <section>
        <h3 className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
          <Scale size={14} /> Manual Overrides
        </h3>
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
          <div className="flex flex-wrap gap-3">
            {data.overrides?.map((tag: string) => (
              <div key={tag} className="flex items-center gap-3 px-4 py-2 bg-blue-50/50 border border-blue-100 rounded-xl text-[12px] font-bold text-blue-700 shadow-sm">
                {tag} <X size={14} className="cursor-pointer hover:text-blue-900" />
              </div>
            ))}
          </div>
          <input type="text" placeholder="Type here..." className="w-full p-4 bg-slate-50 border border-slate-100 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100" />
        </div>
      </section>

      {/* 6. SHIPPING PATTERNS & OPEN CASES */}
      <div className="grid grid-cols-12 gap-8 ">
        <div className="col-span-12">
          <h3 className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3"><Ship size={14} /> Shipping Patterns</h3>
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-4">
            {data.shippingPatterns?.map((p: ShippingPattern, i: number) => (
              <div key={i} className="flex justify-between items-center group">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-slate-300 group-hover:bg-blue-400 transition-colors" />
                  <span className="text-sm font-bold text-slate-700">{p.route}</span>
                </div>
                <span className="text-[11px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase">{p.count} shipments</span>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12">
          <h3 className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4"><ListFilter size={14} /> Open Cases</h3>
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 space-y-4">
            <div className="p-4 border-l-4 border-blue-500 bg-blue-50/30 rounded-r-xl">
              <p className="text-[10px] font-black text-blue-600 uppercase mb-1">1 Open Request</p>
              <p className="text-sm font-bold text-slate-800">AMS (Amsterdam) → DXB (Dubai)</p>
              <div className="mt-3 pt-3 border-t border-blue-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Quote Estimation</p>
                <p className="text-sm font-black text-slate-800">17.5/kg</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
