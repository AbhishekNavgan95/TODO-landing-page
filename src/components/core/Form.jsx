import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";

const Form = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [formOpen, setFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        gender: "",
        email: "",
        language: [],
    });

    const handleFormClose = () => {
        setSearchParams({ form: "close" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loading = toast.loading('The server might be sleeping, kindly wait!.');

        const fdata = {
            firstName: formData?.fname,
            lastName: formData?.lname,
            gender: formData?.gender,
            email: formData?.email,
            language: formData?.language?.join(', ')
        }

        try {
            // hardcoded the backend url for now :)
            const response = await fetch('https://todo-backend-mkub.onrender.com/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(fdata),
            })
            const data = await response.json();

            if (!data.token) {
                throw new Error(data.message || 'Something went wrong!');
            }

            console.log("Response from server:", data);
            setFormData({
                fname: "",
                lname: "",
                gender: "",
                email: "",
                language: [],
            })

            setSearchParams({ form: "close", success: true });
        } catch (error) {
            toast.error(error.message || 'Something went wrong!');
            console.error("Error submitting form:", error);
        } finally {
            toast.dismiss(loading);
        }
    };

    const handleLanguageChange = (lang) => {
        setFormData((prev) => {
            const languages = prev.language.includes(lang)
                ? prev.language.filter((l) => l !== lang)
                : [...prev.language, lang];
            return { ...prev, language: languages };
        });
    };

    useEffect(() => {
        if (searchParams.get("form") === "open") {
            setFormOpen(true);
        } else {
            setFormOpen(false);
        }
    }, [searchParams]);

    if (!formOpen) {
        return null;
    }

    return (
        <div
            onClick={handleFormClose}
            className="fixed z-[10] inset-0 bg-black/50 flex justify-center items-center"
        >
            <form
                onSubmit={handleSubmit}
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-8 rounded-xl max-w-[450px]"
            >
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold">Get Started Today!</h4>
                    <button type="button" onClick={handleFormClose}>
                        <IoClose />
                    </button>
                </div>
                <p className="text-sm mb-4">
                    Fill in your details and take control of your tasks.
                </p>
                <div className="flex gap-3 mb-1">
                    <div className="space-y-1 flex-1">
                        <label htmlFor="fname" className="text-xs font-semibold">
                            First Name
                        </label>
                        <input
                            onChange={(e) =>
                                setFormData({ ...formData, fname: e.target.value })
                            }
                            value={formData.fname}
                            placeholder="Enter your first name"
                            className="bg-pink-50 py-2 rounded-md px-2 text-sm"
                            type="text"
                            id="fname"
                        />
                    </div>
                    <div className="space-y-1 flex-1">
                        <label htmlFor="lname" className="text-xs font-semibold">
                            Last Name
                        </label>
                        <input
                            onChange={(e) =>
                                setFormData({ ...formData, lname: e.target.value })
                            }
                            value={formData.lname}
                            placeholder="Enter your last name"
                            className="bg-pink-50 py-2 rounded-md px-2 text-sm"
                            type="text"
                            id="lname"
                        />
                    </div>
                </div>
                <div className="mb-2">
                    <label className="text-xs font-semibold">Gender</label>
                    <div className="flex items-center gap-3 mt-1">
                        <label className="flex items-center gap-2 bg-pink-50 px-2 py-1 rounded-md">
                            <input
                                onChange={(e) =>
                                    setFormData({ ...formData, gender: e.target.value })
                                }
                                value="male"
                                checked={formData.gender === "male"}
                                type="radio"
                                name="gender"
                            />
                            Male
                        </label>
                        <label className="flex items-center gap-2 bg-pink-50 px-2 py-1 rounded-md">
                            <input
                                onChange={(e) =>
                                    setFormData({ ...formData, gender: e.target.value })
                                }
                                value="female"
                                checked={formData.gender === "female"}
                                type="radio"
                                name="gender"
                            />
                            Female
                        </label>
                    </div>
                </div>
                <div className="mb-1 flex flex-col gap-1">
                    <label className="text-xs font-semibold mb-1">Language</label>
                    {["english", "hindi", "marathi"].map((lang) => (
                        <label
                            key={lang}
                            className="flex items-center gap-2 bg-pink-50 px-2 py-1 rounded-md mb-1"
                        >
                            <input
                                type="checkbox"
                                checked={formData.language.includes(lang)}
                                onChange={() => handleLanguageChange(lang)}
                            />
                            {lang}
                        </label>
                    ))}
                </div>
                <div className="mb-3 flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold">
                        Email Address
                    </label>
                    <input
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        value={formData.email}
                        placeholder="Enter your email address"
                        className="bg-pink-50 py-2 rounded-md px-2 text-sm"
                        type="email"
                        id="email"
                    />
                </div>
                <div className="flex items-center gap-2 mb-4 text-sm">
                    <input required type="checkbox" id="terms" />
                    <label htmlFor="terms" className="text-xs">
                        I agree to the <span className="text-pink-500">Terms and Conditions</span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-pink-500 text-white px-5 py-2 w-full rounded-md"
                >
                    Done
                </button>
            </form>
        </div>
    );
};

export default Form;
