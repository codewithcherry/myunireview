"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Head from "next/head";
import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Head>
        <title>Terms and Conditions | MyUniReview</title>
        <meta name="description" content="MyUniReview Terms and Conditions" />
      </Head>

      <main className="container mx-auto px-4 py-8 md:py-12">
        <Card className="mx-auto max-w-4xl bg-white dark:bg-gray-800">
          <CardHeader>
            <div className="flex flex-col items-center space-y-4">
              <CardTitle className="text-3xl font-bold text-center text-gray-900 dark:text-white">
                Terms and Conditions
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
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    1. Acceptance of Terms
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    By registering, accessing, or using <strong className="text-primary">MyUniReview</strong>, you confirm that you:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Are at least 16 years old (or the legal age in your jurisdiction).</li>
                    <li>Agree to comply with these Terms and any additional policies.</li>
                    <li>Acknowledge that violating these Terms may result in account suspension or termination.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    2. User Responsibilities
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">As a user, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Provide accurate and up-to-date information.</li>
                    <li>Not share false, misleading, or harmful content.</li>
                    <li>Respect other users' privacy and refrain from harassment, hate speech, or illegal activities.</li>
                    <li>Not use the platform for commercial purposes without permission.</li>
                    <li>Not impersonate others or misrepresent affiliations.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    3. Content Ownership & Usage
                  </h2>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>
                      <strong>User-Generated Content:</strong> You retain ownership of what you post, but grant MyUniReview a license to display and distribute it.
                    </li>
                    <li>
                      <strong>Prohibited Content:</strong> Do not post copyrighted material or illegal content.
                    </li>
                    <li>
                      <strong>Third-Party Links:</strong> We may link to external sites but aren't responsible for their content.
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    4. Privacy & Data Protection
                  </h2>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Your data is handled per our Privacy Policy.</li>
                    <li>We won't sell your data without consent.</li>
                    <li>You may request account deletion, but some data may be retained legally.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    5. Disclaimers & Limitations
                  </h2>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>We don't guarantee accuracy of university details or job posts.</li>
                    <li>We're not liable for decisions made based on platform content.</li>
                    <li>Use the platform at your own risk.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    6. Account Termination
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">We may suspend accounts that:</p>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Violate these Terms or laws.</li>
                    <li>Engage in spam or harmful behavior.</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    7. Changes to Terms
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    We may update these Terms. Continued use means acceptance.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    8. Governing Law
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    These Terms are governed by our company's jurisdiction laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                    9. Contact Us
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">For questions, contact us at:</p>
                  <p className="font-medium text-primary">support@myunireview.com</p>
                </section>

                <div className="pt-6 text-center">
                  <p className="text-muted-foreground mb-4">
                    By using MyUniReview, you agree to these Terms.
                  </p>
                  <Link href={"/login"} className="p-2 text-slate-800 bg-blue-500 hover:bg-blue-600 text-white shadow-md rounded-lg mt-4">I Agree</Link>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}