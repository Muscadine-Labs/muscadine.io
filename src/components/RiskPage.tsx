'use client';

import React from 'react';
import Link from 'next/link';

const VAULT_EXPOSURE = [
  { name: 'USDC Prime (V2)', protocols: 'Morpho markets (overcollateralized lending)' },
  { name: 'Muscadine USDC Frontier (V2)', protocols: 'Morpho markets (overcollateralized lending)' },
  { name: 'WETH Prime (V2)', protocols: 'Morpho markets (overcollateralized lending)' },
  { name: 'cbBTC Prime (V2)', protocols: 'Morpho markets (overcollateralized lending)' },
];

const RiskPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-light text-gray-900 mb-4 font-serif border-b-2 border-gray-200 pb-4">
            Risk
          </h1>
          <p className="text-gray-600 italic mb-8">Last updated: May 2026</p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-2">Not a bank · Not advice</h2>
            <p className="text-red-800">
              Muscadine Labs LLC is a <strong>DeFi vault curator and technology provider</strong>, not a bank, broker,
              investment adviser, or custodian. Nothing here is investment, tax, or legal advice. Digital asset
              strategies involve substantial risk, including total loss of principal. Past or projected yield is not a
              guarantee of future results. You retain custody of your assets and are solely responsible for wallet
              security, transaction signing, and eligibility in your jurisdiction. On-chain state is the source of
              truth. See also our{' '}
              <Link href="/legal" className="underline font-medium text-red-900">
                legal disclaimer
              </Link>
              .
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What we are</h2>
            <p className="text-gray-700 mb-4">
              Muscadine Labs publishes curated Morpho vault strategies on Base. We configure markets and risk parameters;
              users deposit through non-custodial wallets. We do not hold user private keys, guarantee returns, or insure
              deposits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Material risks</h2>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>Smart contract bugs or exploits in vault, market, or dependency contracts</li>
              <li>Market, liquidity, and oracle failures (depegs, illiquid exits, bad prices)</li>
              <li>Curator decisions (market listings, parameters, pauses) — not a guarantee of safety</li>
              <li>Regulatory change and product availability in your jurisdiction</li>
              <li>User error (lost keys, phishing, wrong chain, unsigned transaction mistakes)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Market &amp; collateral framework</h2>
            <p className="text-gray-700 mb-4">
              We list Morpho markets that meet minimum liquidity, collateralization, and operational criteria.
              Concentration limits, asset type, and oracle dependencies are reviewed before onboarding. Markets can be
              removed or capped when conditions change. Ratings in the exposure table are qualitative summaries — not
              investment grades.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Monitoring</h2>
            <p className="text-gray-700 mb-4">
              We review utilization, collateral factors, and reported incidents on a recurring basis. Guardians can pause
              vault operations per on-chain roles. We may update documentation, app notices, or parameters when risk
              increases; we are not obligated to recover user funds in a failure event.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Responsibilities</h2>
            <div className="overflow-x-auto border border-gray-200 rounded-lg mb-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-3 font-medium text-gray-900">Party</th>
                    <th className="text-left p-3 font-medium text-gray-900">Role</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 font-medium text-gray-900 align-top">You (user)</td>
                    <td className="p-3 text-gray-700">Custody keys, sign transactions, tax reporting, suitability, reading on-chain state</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium text-gray-900 align-top">Muscadine Labs</td>
                    <td className="p-3 text-gray-700">Curate vault parameters and markets; operate interfaces; no custody of deposits</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 font-medium text-gray-900 align-top">Morpho &amp; markets</td>
                    <td className="p-3 text-gray-700">Protocol logic, market liquidity, governance of underlying infrastructure</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-gray-900 align-top">Third parties</td>
                    <td className="p-3 text-gray-700">Wallets, RPCs, bridges, on/off-ramps — separate terms and risks</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-700 text-sm">
              On-chain roles and contract addresses:{' '}
              <a
                href="https://docs.muscadine.xyz/vault/roles-contracts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 underline"
              >
                docs.muscadine.xyz — Roles &amp; contracts
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vault exposure (summary)</h2>
            <p className="text-gray-700 text-sm mb-4">
              For documentation purposes only. Verify live allocation on{' '}
              <a href="https://analytics.muscadine.xyz/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                analytics.muscadine.xyz
              </a>{' '}
              and on-chain.
            </p>
            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-3 font-medium text-gray-900">Vault</th>
                    <th className="text-left p-3 font-medium text-gray-900">Exposure</th>
                  </tr>
                </thead>
                <tbody>
                  {VAULT_EXPOSURE.map((vault) => (
                    <tr key={vault.name} className="border-b last:border-0">
                      <td className="p-3 font-medium text-gray-900">{vault.name}</td>
                      <td className="p-3 text-gray-700">{vault.protocols}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Audits &amp; dependencies</h2>
            <p className="text-gray-700 mb-4">
              Vaults use Morpho-developed ERC-4626 infrastructure. Third-party audits cover specific contracts and versions
              — not every integration, frontend, or future parameter change. Review Morpho&apos;s published audit reports
              and scope before depositing.
            </p>
            <a
              href="https://docs.morpho.org/get-started/resources/audits/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 font-medium underline"
            >
              Morpho audits — security reviews →
            </a>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Related documents</h2>
            <ul className="text-gray-700 list-disc list-inside space-y-2">
              <li>
                <Link href="/terms" className="text-orange-600 underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-orange-600 underline">
                  Legal disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-orange-600 underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="https://docs.muscadine.xyz/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">
                  Technical documentation (docs.muscadine.xyz)
                </a>
              </li>
            </ul>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/" className="inline-flex items-center text-orange-600 hover:text-orange-800 font-semibold transition-colors">
              ← Back to Muscadine
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskPage;
