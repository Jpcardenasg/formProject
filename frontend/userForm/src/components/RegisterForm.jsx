import { useForm } from "../hook/useForm";

export const RegisterForm = () => {

    const initialForm = {
        name: '',
        lastName: '',
        email: ''
    };

    const { formState, onInputChange, onSubmit } = useForm( initialForm );
    const { name, lastName, email } = formState;

    return (
        <div className="flex items-center justify-center mb-6">
            <form onSubmit={onSubmit} className="register-form flex items-center justify-center max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
                <div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="John"
                            value={name}
                            onChange={onInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last Name:
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Doe"
                            value={lastName}
                            onChange={onInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="jhondoe@email.com"
                            value={email}
                            onChange={onInputChange}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                </div>
                <div className="flex items-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};