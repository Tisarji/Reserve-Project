import Image from 'next/image';
import logoImage from '../../image/homepage/logo-black-full.png';
import {
	Facebook,
	Youtube,
	Instagram,
	Twitter,
	Phone,
	Mail,
	MapPin,
	ExternalLink
} from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-300">
			<div className="container mx-auto pt-16 pb-8 px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="space-y-4">
						<div className="bg-white p-3 inline-block rounded-lg">
							<Image
								src={logoImage}
								alt="MUT Logo"
								width={150}
								height={50}
								className="h-12 w-auto object-contain"
							/>
						</div>

						<div className="space-y-3">
							<a href="tel:029883650" className="flex items-center gap-3 hover:text-white transition duration-200">
								<Phone className="w-5 h-5 text-indigo-400" />
								<span>029883650-66 ต่อ 1105 - 1107</span>
							</a>
							<a href="tel:0298840214" className="flex items-center gap-3 hover:text-white transition duration-200">
								<Phone className="w-5 h-5 text-indigo-400" />
								<span>02-988-4021-4 (สมัครเรียน)</span>
							</a>
							<a href="mailto:info@mut.ac.th" className="flex items-center gap-3 hover:text-white transition duration-200">
								<Mail className="w-5 h-5 text-indigo-400" />
								<span>info@mut.ac.th</span>
							</a>
							<div className="flex items-start gap-3">
								<MapPin className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
								<span>มหาวิทยาลัยเทคโนโลยีมหานคร<br />140 ถนนเชื่อมสัมพันธ์ แขวงกระทุ่มราย<br />เขตหนองจอก กรุงเทพฯ 10530</span>
							</div>
						</div>

						<div className="flex gap-3 pt-2">
							<a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition duration-300">
								<Facebook className="w-5 h-5" />
							</a>
							<a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition duration-300">
								<Youtube className="w-5 h-5" />
							</a>
							<a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition duration-300">
								<Instagram className="w-5 h-5" />
							</a>
							<a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition duration-300">
								<Twitter className="w-5 h-5" />
							</a>
						</div>
					</div>

					{[
						{
							title: "เกี่ยวกับมหาวิทยาลัย",
							links: ["เกี่ยวกับมหานคร", "Art for Life", "Privacy Policy", "Cookie Policy"],
						},
						{
							title: "ข้อมูลติดต่อ",
							links: ["บุคลากร", "ติดต่อเรา", "หน่วยงานภายใน", "ร่วมงานกับมหาวิทยาลัย", "แผนที่ภายในมหาวิทยาลัย"],
						},
						{
							title: "เกี่ยวกับนักศึกษา",
							links: ["ปฏิทินการศึกษา", "ข้อบังคับ และระเบียบ", "ค่าเทอมและทุน", "สำนักทะเบียน", "กองทุนกู้ยืมเพื่อการศึกษา"],
						},
					].map((section, idx) => (
						<div key={idx} className="space-y-4">
							<h4 className="text-white font-semibold text-lg relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-indigo-500">
								{section.title}
							</h4>
							<ul className="space-y-2">
								{section.links.map((link, i) => (
									<li key={i}>
										<a
											href="#"
											className="hover:text-indigo-300 transition duration-200 flex items-center gap-1 group"
										>
											<span>{link}</span>
											<ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="border-t border-gray-800">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<p className="text-sm">
							Copyright© Mahanakorn University of Technology 2022. All rights reserved.
						</p>
						<div className="flex gap-4 mt-3 md:mt-0">
							<a href="#" className="text-sm hover:text-white transition duration-200">Terms</a>
							<a href="#" className="text-sm hover:text-white transition duration-200">Privacy</a>
							<a href="#" className="text-sm hover:text-white transition duration-200">Cookies</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
