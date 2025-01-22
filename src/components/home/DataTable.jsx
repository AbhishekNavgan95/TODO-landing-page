import React from 'react'

const DataTable = ({ data }) => {

    if (data.length === 0) return null;

    return (
        <section className='py-10 bg-white '>
            <div className='max-w-contain px-3 mx-auto'>
                <div className="font-roboto overflow-x-auto w-full shadow-xl">
                    <table className="min-w-full divide-y divide-blue-100">
                        <thead className="bg-gray-100 whitespace-nowrap font-semibold">
                            <tr>
                                <th className=" px-4 py-4 text-left text-xs text-black capitalize tracking-wider">
                                    <p className='pl-10'>
                                        Name
                                    </p>
                                </th>
                                <th className="px-4 py-4 text-left text-xs text-black capitalize tracking-wider">
                                    Gender
                                </th>
                                <th className="px-4 py-4 text-left text-xs text-black capitalize tracking-wider">
                                    Language
                                </th>
                                <th className="px-4 py-4 text-left text-xs text-black capitalize tracking-wider">
                                    Email
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-bluw-100 whitespace-nowrap">
                            {
                                data.map((user, index) => (
                                    <tr key={user.firstName + index}>
                                        <td className=" px-4 py-4 text-left text-xs text-black flex items-center gap-5">
                                            <input type="checkbox" />
                                            {user.firstName} {user.lastName}
                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-800">
                                            {user?.gender}
                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-800">
                                            {user?.language}
                                        </td>
                                        <td className="px-4 py-4 text-sm text-gray-800">
                                            {user?.email}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default DataTable