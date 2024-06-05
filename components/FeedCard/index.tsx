import React from 'react';
import Image from 'next/image';
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';

const FeedCard: React.FC = () => {
    return (
        <div className="border border-r-0 border-l-0 border-b-0 border-gray-600 p-4 hover:bg-slate-600 transition-all">
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <Image src="https://avatars.githubusercontent.com/u/44976328?v=4" alt="user-image" height={50} width={50} />
                </div>
                <div className="col-span-10">
                    <h5>Akshat</h5>
                    <p>Hello fhahatlkajlkfahhgj asfjlsjl</p>
                    <div className="flex justify-between mt-5 text-xl items-center p-2 w-full">
                        <div>
                            <BiMessageRounded />
                        </div>
                        <div>
                            <FaRetweet />
                        </div>
                        <div>
                            <AiOutlineHeart />
                        </div>
                        <div>
                            <BiUpload />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedCard;