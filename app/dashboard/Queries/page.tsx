"use client";
import { useEffect, useState } from "react";
import React from "react";

type Contact = {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  createdAt: string;
};

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const contactsRes = await fetch("/api/contact");
        const contactsData = await contactsRes.json();
        setContacts(contactsData.contacts || []);
      } catch (err) {
        console.error("Failed to fetch data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">All Queries</h1>
      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="min-w-full bg-white text-sm ">
          <thead className="bg-red-900 text-white">
            <tr>
              <th className="text-left px-6 py-3">Date</th>
              <th className="text-left px-6 py-3">Name</th>
              <th className="text-left px-6 py-3">Contact</th>
              <th className="text-left px-6 py-3">Email</th>
              <th className="text-left px-6 py-3">Subject</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((query) => (
                <tr key={query.id} className="border-t ">
                  <td className="px-6 py-4">
                    {query.createdAt
                      ? new Date(query.createdAt).toLocaleDateString()
                      : "—"}
                  </td>
                  <td className="px-6 py-4">{query.name}</td>
                  <td className="px-6 py-4">{query.phone}</td>
                  <td className="px-6 py-4">{query.email}</td>
                  <td className="px-6 py-4">{query.message}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="text-center text-lg p-6 text-slate-500"
                >
                  No Contacts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
