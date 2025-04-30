import Image from 'next/image';
import logoImage from '../../image/homepage/logo-black-full.png';
import { Facebook, Youtube } from 'lucide-react';

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-10">
			<div className="container mx-auto flex flex-col md:flex-row justify-between">
				<div className="mb-8 md:mb-0">
					<Image src={logoImage} alt="MUT Logo" width={150} height={50} />
					<div className="mt-4 space-y-2">
						<a href="#" className="flex items-center gap-2 text-sm">
							<Facebook className="w-4 h-4" /> 029883650-66 ต่อ 1105 - 1107
						</a>
						<a href="#" className="flex items-center gap-2 text-sm">
							<Youtube className="w-4 h-4" /> 02-988-4021-4 (สมัครเรียน)
						</a>
						<p className="text-sm">มหาวิทยาลัยเทคโนโลยีมหานคร</p>
						<p className="text-sm">140 ถนนเชื่อมสัมพันธ์ แขวงกระทุ่มราย เขตหนองจอก กรุงเทพฯ 10530</p>
					</div>
				</div>

				<div className="flex gap-10">
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
						<div key={idx}>
							<h4 className="font-semibold mb-2">{section.title}</h4>
							<ul className="space-y-1 text-sm">
								{section.links.map((link, i) => (
									<li key={i}><a href="#">{link}</a></li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="text-center text-xs mt-8">
				Copyright© Mahanakorn University of Technology 2022. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
