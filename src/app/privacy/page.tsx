"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Head from "next/head";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>Privacy Policy | MyUniReview</title>
        <meta name="description" content="MyUniReview Privacy Policy" />
      </Head>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <Card className="mx-auto max-w-4xl bg-white dark:bg-gray-800">
          <CardHeader>
            <div className="flex flex-col items-center space-y-4">
              <CardTitle className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                Privacy Policy
              </CardTitle>
              <p className="text-muted-foreground text-center">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </CardHeader>

          <CardContent>
            <ScrollArea className="h-[calc(100vh-220px)] md:h-[calc(100vh-260px)] pr-4">
              <div className="prose dark:prose-invert max-w-none space-y-6">
                <section>
                  <p className="text-gray-700 dark:text-gray-300">
                    At <strong className="text-primary">MyUniReview</strong>, we value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our platform.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    1. Information We Collect
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    We may collect the following types of information:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li><strong>Personal Information:</strong> Name, email, university details, and profile information.</li>
                    <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and interaction with our platform.</li>
                    <li><strong>Cookies & Tracking:</strong> We use cookies to enhance your experience (you can disable them in browser settings).</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    2. How We Use Your Information
                  </h2>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>To provide and improve our services.</li>
                    <li>To personalize your experience and show relevant content.</li>
                    <li>To communicate with you (e.g., updates, support).</li>
                    <li>To analyze platform usage and improve performance.</li>
                    <li>To comply with legal obligations.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    3. Data Sharing & Disclosure
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    We do <strong>not</strong> sell your personal data. We may share information with:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li><strong>Service Providers:</strong> Third-party vendors who help us operate (e.g., hosting, analytics).</li>
                    <li><strong>Legal Compliance:</strong> If required by law (e.g., court orders, fraud prevention).</li>
                    <li><strong>Business Transfers:</strong> In case of mergers or acquisitions.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    4. Data Security
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    We implement industry-standard security measures, including encryption and access controls. However, no online platform is 100% secure—use strong passwords and protect your account.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    5. Your Rights
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Depending on your location, you may have the right to:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Access, correct, or delete your data.</li>
                    <li>Opt out of marketing communications.</li>
                    <li>Request a copy of your data.</li>
                    <li>Withdraw consent (where applicable).</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">
                    To exercise these rights, contact us at <strong className="text-primary">support@myunireview.com</strong>.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    6. Third-Party Links
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our platform may link to external sites (e.g., universities, job boards). We are not responsible for their privacy practices—review their policies separately.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    7. Children's Privacy
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    Our services are not intended for users under <strong>16</strong>. We do not knowingly collect data from children.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    8. Policy Updates
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    We may update this policy periodically. Changes will be posted here, and significant updates will be notified via email.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    9. Contact Us
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    For privacy-related questions, contact our Data Protection Officer at:
                  </p>
                  <p className="font-medium text-primary">privacy@myunireview.com</p>
                </section>

                <div className="pt-6 text-center">
                  <Link href={"/login"} className="p-2 text-slate-800 bg-blue-500 hover:bg-blue-600 text-white shadow-md rounded-lg mt-4">I Acknowledge</Link>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}