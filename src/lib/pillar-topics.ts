import { articles, type Article } from "@/lib/articles";

export type PillarKey = "than" | "tam" | "tri";

export interface PillarTopic {
  pillar: PillarKey;
  slug: string;
  icon: string;
  label: string;
  title: string;
  description: string;
  guidance: string;
  insights: string[];
  tags: string[];
  keywords: string[];
  ctaHref?: string;
  ctaLabel?: string;
}

export const PILLAR_META: Record<
  PillarKey,
  { label: string; color: string; softColor: string; href: string; tagline: string }
> = {
  than: {
    label: "Thân",
    color: "#18B5B0",
    softColor: "#E8F8F6",
    href: "/than",
    tagline: "Lắng nghe cơ thể để hiểu điều đang diễn ra bên trong.",
  },
  tam: {
    label: "Tâm",
    color: "#E85A71",
    softColor: "#FDEEF1",
    href: "/tam",
    tagline: "Nhìn rõ cảm xúc, mô thức và những điều đang âm thầm dẫn dắt bạn.",
  },
  tri: {
    label: "Trí",
    color: "#7C6FF7",
    softColor: "#F0EEFF",
    href: "/tri",
    tagline: "Tư duy rõ ràng hơn để không bị chính mình đánh lừa.",
  },
};

export const PILLAR_TOPICS: PillarTopic[] = [
  {
    pillar: "than",
    slug: "hieu-co-the",
    icon: "🧭",
    label: "Hiểu cơ thể",
    title: "Cơ thể không chống lại bạn — nó đang gửi tín hiệu",
    description: "Cảm giác căng, mệt, khó ngủ hay bồn chồn không phải những lỗi cần che giấu. Chúng là dữ liệu về trạng thái của hệ thần kinh, nhịp sống và nhu cầu phục hồi.",
    guidance: "Bắt đầu bằng việc quan sát tín hiệu cơ thể trong bối cảnh cụ thể, thay vì vội phán xét hoặc ép mình phải ổn.",
    insights: ["Nhận diện tín hiệu căng thẳng trước khi chúng trở thành quá tải", "Phân biệt mệt thể chất, mệt cảm xúc và trạng thái đóng băng", "Xây dựng nhịp phục hồi phù hợp với cơ thể của chính bạn"],
    tags: ["Khoa học thần kinh", "Cảm xúc"],
    keywords: ["cơ thể", "hệ thần kinh", "giấc ngủ"],
  },
  {
    pillar: "than",
    slug: "hieu-co-the/he-than-kinh",
    icon: "⚡",
    label: "Hệ thần kinh",
    title: "Hiểu hệ thần kinh để hiểu phản ứng của chính mình",
    description: "Hệ thần kinh liên tục đánh giá an toàn và nguy hiểm trước cả khi lý trí kịp lên tiếng. Vì vậy, nhiều phản ứng tưởng như vô lý thực chất là cơ chế bảo vệ đã được học.",
    guidance: "Điều hòa không có nghĩa là luôn bình tĩnh; đó là khả năng nhận ra trạng thái, đáp ứng phù hợp và quay về vùng an toàn.",
    insights: ["Nhận biết chiến đấu, bỏ chạy, đóng băng và làm vừa lòng", "Hiểu vì sao cơ thể phản ứng trước khi bạn kịp suy nghĩ", "Tạo những tín hiệu an toàn nhỏ nhưng lặp lại đều đặn"],
    tags: ["Khoa học thần kinh"],
    keywords: ["hệ thần kinh", "não bộ", "sinh tồn"],
  },
  {
    pillar: "than",
    slug: "hieu-co-the/stress",
    icon: "🌩️",
    label: "Stress & Phục hồi",
    title: "Stress không chỉ nằm trong đầu",
    description: "Stress là phản ứng toàn thân giúp bạn huy động năng lượng trước thử thách. Vấn đề xuất hiện khi phản ứng này kéo dài mà không có đủ thời gian hoàn tất và phục hồi.",
    guidance: "Phục hồi hiệu quả thường đến từ nhịp nghỉ ngắn, đều và có chủ đích — không chỉ từ một kỳ nghỉ dài sau khi đã kiệt sức.",
    insights: ["Phân biệt stress ngắn hạn hữu ích và stress mạn tính", "Nhận ra dấu hiệu quá tải trong giấc ngủ, tiêu hóa và cảm xúc", "Thiết kế chu kỳ căng thẳng – giải phóng – phục hồi"],
    tags: ["Khoa học thần kinh", "Cảm xúc", "Sự nghiệp"],
    keywords: ["stress", "căng thẳng", "burnout", "phục hồi"],
  },
  {
    pillar: "than",
    slug: "hieu-co-the/giac-ngu",
    icon: "🌙",
    label: "Giấc ngủ",
    title: "Giấc ngủ là nền tảng của khả năng tự điều chỉnh",
    description: "Trong khi ngủ, não bộ củng cố trí nhớ, xử lý cảm xúc và phục hồi khả năng chú ý. Thiếu ngủ khiến những phản ứng nhỏ dễ trở thành xung đột lớn.",
    guidance: "Thay vì chỉ cố ngủ sớm, hãy xây dựng tín hiệu báo cho cơ thể rằng ngày đã kết thúc: ánh sáng dịu, nhịp chậm và giờ thức dậy ổn định.",
    insights: ["Hiểu vai trò của nhịp sinh học và ánh sáng", "Nhận diện vòng lặp lo lắng – mất ngủ – kiệt sức", "Xây dựng nghi thức chuyển từ hoạt động sang nghỉ ngơi"],
    tags: ["Khoa học thần kinh"],
    keywords: ["giấc ngủ", "ngủ", "nhịp sinh học"],
  },
  {
    pillar: "than",
    slug: "hieu-co-the/van-dong",
    icon: "🏃",
    label: "Vận động",
    title: "Vận động là một cách não bộ học lại cảm giác an toàn",
    description: "Chuyển động không chỉ thay đổi cơ bắp. Nó tác động đến tâm trạng, sự chú ý, trí nhớ và khả năng giải phóng năng lượng bị giữ lại sau stress.",
    guidance: "Hình thức vận động tốt nhất là hình thức bạn có thể duy trì và cảm thấy kết nối hơn với cơ thể, không phải hình thức khiến bạn trừng phạt bản thân.",
    insights: ["Dùng vận động để chuyển trạng thái thay vì né tránh cảm xúc", "Ưu tiên tính đều đặn hơn cường độ cực đoan", "Kết hợp sức mạnh, linh hoạt và vận động nhẹ trong ngày"],
    tags: ["Khoa học thần kinh", "Hành vi"],
    keywords: ["vận động", "cơ thể", "thói quen"],
  },
  {
    pillar: "than",
    slug: "hieu-co-the/cang-co",
    icon: "💪",
    label: "Căng cơ",
    title: "Căng cơ có thể là một phần của phản ứng bảo vệ",
    description: "Vai, hàm, cổ hay lưng căng cứng đôi khi phản ánh tư thế và tải vận động; đôi khi chúng đi cùng trạng thái cảnh giác kéo dài của hệ thần kinh.",
    guidance: "Đừng chỉ cố kéo giãn nơi đang đau. Hãy quan sát nhịp thở, tư thế, khối lượng công việc và những tình huống khiến cơ thể tự siết lại.",
    insights: ["Nhận biết thói quen siết hàm, nhún vai và nín thở", "Kết hợp nghỉ vi mô với thay đổi tư thế", "Tìm hỗ trợ y tế khi đau kéo dài hoặc có dấu hiệu bất thường"],
    tags: ["Khoa học thần kinh"],
    keywords: ["căng cơ", "cơ thể", "stress"],
  },
  {
    pillar: "than",
    slug: "hieu-co-the/ho-hap",
    icon: "🌬️",
    label: "Hô hấp",
    title: "Hơi thở là cây cầu giữa ý thức và hệ thần kinh",
    description: "Hô hấp diễn ra tự động nhưng cũng có thể được điều chỉnh có chủ đích. Nhịp thở chậm và dễ chịu có thể giúp cơ thể nhận thêm tín hiệu an toàn.",
    guidance: "Không cần hít thật sâu. Với nhiều người, thở nhẹ, dài hơn ở thì thở ra và không gắng sức là điểm bắt đầu phù hợp hơn.",
    insights: ["Quan sát hơi thở trước khi cố thay đổi nó", "Tránh ép thở khi đang chóng mặt hoặc quá căng", "Kết hợp hơi thở với cảm nhận bàn chân và không gian xung quanh"],
    tags: ["Khoa học thần kinh", "Cảm xúc"],
    keywords: ["hô hấp", "hơi thở", "hệ thần kinh"],
  },
  {
    pillar: "than",
    slug: "thuc-hanh",
    icon: "🌿",
    label: "Thực hành với Thân",
    title: "Những thực hành nhỏ để quay về với cơ thể",
    description: "Khả năng cảm nhận cơ thể được xây dựng qua những lần dừng lại ngắn trong đời sống thật — không cần đợi đến khi có một giờ hoàn toàn yên tĩnh.",
    guidance: "Chọn một thực hành đủ nhỏ để lặp lại mỗi ngày: cảm nhận bàn chân, thả lỏng hàm, nhìn quanh phòng hoặc đi bộ chậm trong vài phút.",
    insights: ["Kiểm tra trạng thái cơ thể ba lần mỗi ngày", "Dùng chuyển động và định hướng giác quan khi bị cuốn vào suy nghĩ", "Ghi lại điều giúp cơ thể dịu xuống thay vì áp dụng công thức cứng nhắc"],
    tags: ["Cảm xúc", "Khoa học thần kinh", "Hành vi"],
    keywords: ["thực hành", "cơ thể", "hệ thần kinh"],
    ctaHref: "/kham-pha/ban-do-noi-tam",
    ctaLabel: "Bắt đầu khám phá bản đồ nội tâm",
  },
  {
    pillar: "than",
    slug: "cua-hang",
    icon: "🧰",
    label: "Công cụ thực hành",
    title: "Chọn công cụ giúp bạn thực hành đều đặn",
    description: "Một công cụ tốt không thay thế sự hiểu biết hay chăm sóc chuyên môn. Giá trị của nó nằm ở việc làm cho thói quen hữu ích trở nên dễ bắt đầu và dễ duy trì hơn.",
    guidance: "AIMIND đang hoàn thiện bộ công cụ thực hành. Trong lúc này, bạn có thể bắt đầu với các bài đọc và bài test miễn phí đang có trên website.",
    insights: ["Ưu tiên công cụ đơn giản, rõ mục đích và dễ dùng", "Không biến chăm sóc bản thân thành áp lực mua sắm", "Đánh giá hiệu quả dựa trên trải nghiệm thực tế của cơ thể"],
    tags: ["Hành vi", "Khoa học thần kinh"],
    keywords: ["thực hành", "thói quen", "cơ thể"],
    ctaHref: "/lien-he",
    ctaLabel: "Liên hệ AIMIND",
  },

  {
    pillar: "tam",
    slug: "hieu-tam-ly",
    icon: "🪞",
    label: "Hiểu tâm lý",
    title: "Nhìn thấy điều đang vận hành phía sau phản ứng",
    description: "Tâm lý không chỉ là những gì bạn nghĩ có ý thức. Niềm tin cốt lõi, ký ức cảm xúc và chiến lược bảo vệ cùng tạo nên cách bạn diễn giải thế giới.",
    guidance: "Hiểu mình không nhằm dán nhãn, mà để tạo khoảng dừng giữa điều xảy ra và cách bạn phản ứng.",
    insights: ["Phân biệt sự kiện với ý nghĩa bạn gán cho sự kiện", "Nhận diện nhu cầu ẩn dưới phản ứng mạnh", "Theo dõi mô thức lặp lại trong nhiều bối cảnh"],
    tags: ["Mô thức", "Tự nhận thức", "Cảm xúc"],
    keywords: ["tâm lý", "mô thức", "vô thức"],
  },
  {
    pillar: "tam",
    slug: "hieu-tam-ly/vo-thuc",
    icon: "🌊",
    label: "Vô thức",
    title: "Vô thức không bí ẩn — nó là điều đã trở nên tự động",
    description: "Nhiều liên tưởng, dự đoán và phản ứng được kích hoạt ngoài vùng chú ý. Chúng giúp não xử lý nhanh, nhưng cũng có thể giữ bạn trong những lựa chọn quen thuộc.",
    guidance: "Bạn tiếp cận vô thức bằng cách quan sát điều lặp lại: kiểu người bạn bị thu hút, câu chuyện bạn thường kể và cảm xúc xuất hiện trước khi lý trí giải thích.",
    insights: ["Theo dõi phản ứng tự động thay vì chỉ phân tích suy nghĩ", "Nhận diện điều quen thuộc đang bị nhầm với điều an toàn", "Dùng tò mò thay cho tự trách khi thấy mô thức cũ"],
    tags: ["Mô thức", "Tự nhận thức"],
    keywords: ["vô thức", "tự động", "mô thức"],
  },
  {
    pillar: "tam",
    slug: "hieu-tam-ly/niem-tin",
    icon: "🧱",
    label: "Niềm tin cốt lõi",
    title: "Niềm tin cốt lõi là chiếc kính bạn quên mình đang đeo",
    description: "Những kết luận như “mình không đủ tốt” hay “không thể tin ai” thường hình thành từ trải nghiệm sớm và âm thầm định hướng sự chú ý, lựa chọn, quan hệ.",
    guidance: "Thay đổi niềm tin không đến từ câu khẳng định tích cực đơn lẻ, mà từ những trải nghiệm mới đủ an toàn và được lặp lại.",
    insights: ["Tìm câu kết luận về bản thân nằm dưới cảm xúc", "Kiểm tra bằng chứng ủng hộ và phản bác niềm tin", "Tạo hành động nhỏ cho phép một khả năng mới xuất hiện"],
    tags: ["Mô thức", "Tự nhận thức", "Gia đình"],
    keywords: ["niềm tin", "không đủ tốt", "mô thức"],
  },
  {
    pillar: "tam",
    slug: "hieu-tam-ly/schema",
    icon: "🏗️",
    label: "Schema",
    title: "Schema: khuôn mẫu giúp bạn sống sót nhưng có thể giới hạn hiện tại",
    description: "Schema là mạng lưới ký ức, cảm xúc và niềm tin khiến một số tình huống hiện tại được cảm nhận như trải nghiệm cũ. Nó thường kích hoạt trước khi bạn kịp cân nhắc.",
    guidance: "Mục tiêu không phải xóa schema mà là nhận ra khi nó đang chiếm quyền điều khiển, chăm sóc nhu cầu cũ và chọn phản ứng phù hợp hơn.",
    insights: ["Nhận diện tác nhân kích hoạt và cảm giác cơ thể đi kèm", "Phân biệt phần trẻ bị tổn thương với người trưởng thành hiện tại", "Thực hành đáp ứng nhu cầu theo cách lành mạnh hơn"],
    tags: ["Mô thức", "Phân biệt mô thức", "Gia đình"],
    keywords: ["schema", "mô thức", "khuôn mẫu"],
  },
  {
    pillar: "tam",
    slug: "hieu-tam-ly/attachment",
    icon: "🔗",
    label: "Attachment",
    title: "Kiểu gắn bó định hình cách bạn tìm kiếm sự gần gũi",
    description: "Trải nghiệm gắn bó sớm giúp hệ thần kinh học điều gì xảy ra khi cần người khác. Những bài học đó có thể tiếp tục xuất hiện trong tình yêu, tình bạn và xung đột.",
    guidance: "Kiểu gắn bó không phải bản án hay nhãn tính cách. Sự an toàn có thể được học lại qua nhận thức, ranh giới và quan hệ nhất quán.",
    insights: ["Phân biệt lo âu, né tránh, an toàn và hỗn loạn", "Nhìn cách bạn phản ứng khi khoảng cách trong quan hệ thay đổi", "Tập giao tiếp nhu cầu thay vì thử lòng hoặc rút lui"],
    tags: ["Gắn bó", "Quan hệ"],
    keywords: ["gắn bó", "attachment", "quan hệ"],
  },
  {
    pillar: "tam",
    slug: "hieu-tam-ly/identity",
    icon: "🧩",
    label: "Bản sắc",
    title: "Bạn là ai ngoài những vai trò đã học cách đảm nhận?",
    description: "Bản sắc được xây từ trải nghiệm, quan hệ, văn hóa và những câu chuyện bạn kể về mình. Một số vai trò từng giúp bạn được công nhận nhưng có thể không còn phù hợp.",
    guidance: "Khám phá bản sắc không đòi hỏi phủ nhận quá khứ. Đó là mở rộng quyền lựa chọn về cách bạn muốn sống ở hiện tại.",
    insights: ["Phân biệt giá trị thật với kỳ vọng đã nội hóa", "Nhận diện vai trò bạn sợ buông vì sợ mất tình yêu", "Thử những lựa chọn nhỏ phù hợp hơn với con người hiện tại"],
    tags: ["Tự nhận thức", "Mô thức"],
    keywords: ["bản sắc", "identity", "chính mình"],
  },
  {
    pillar: "tam",
    slug: "hieu-tam-ly/cam-xuc",
    icon: "🌡️",
    label: "Cảm xúc",
    title: "Cảm xúc là thông tin, không phải mệnh lệnh",
    description: "Cảm xúc giúp bạn nhận biết nhu cầu, ranh giới và ý nghĩa của điều đang xảy ra. Kìm nén hoàn toàn hay hành động ngay theo cảm xúc đều có thể làm mất dữ liệu quan trọng.",
    guidance: "Hãy gọi tên cảm xúc, cảm nhận nó trong cơ thể và xác định nhu cầu trước khi quyết định hành động.",
    insights: ["Mở rộng vốn từ cảm xúc để nhận diện chính xác hơn", "Tách cảm xúc khỏi câu chuyện diễn giải", "Chọn hành động phù hợp với giá trị, không chỉ với xung lực"],
    tags: ["Cảm xúc", "Tự nhận thức"],
    keywords: ["cảm xúc", "khóc", "kìm nén"],
  },
  {
    pillar: "tam",
    slug: "hieu-tam-ly/defense-mechanisms",
    icon: "🛡️",
    label: "Cơ chế phòng vệ",
    title: "Phòng vệ tâm lý là cách tâm trí giảm đau trong ngắn hạn",
    description: "Phủ nhận, hợp lý hóa, phóng chiếu hay tách rời có thể giúp bạn chịu đựng điều quá khó. Nhưng khi trở thành phản ứng mặc định, chúng làm giảm khả năng tiếp xúc với thực tế.",
    guidance: "Không cần phá bỏ phòng vệ bằng bạo lực. Hãy nhận ra chức năng bảo vệ của nó và xây thêm năng lực chịu đựng cảm xúc an toàn.",
    insights: ["Nhận diện điều bạn thường tránh, đổ lỗi hoặc giải thích quá nhanh", "Tìm nỗi sợ mà cơ chế phòng vệ đang che chắn", "Tăng khả năng ở lại với sự khó chịu theo từng bước nhỏ"],
    tags: ["Tự nhận thức", "Mô thức", "Phân biệt mô thức"],
    keywords: ["phòng vệ", "né tránh", "phóng chiếu"],
  },
  {
    pillar: "tam",
    slug: "hieu-tam-ly/habit",
    icon: "🔄",
    label: "Thói quen",
    title: "Thói quen là giải pháp tự động cho một bối cảnh lặp lại",
    description: "Một hành vi được lặp đủ nhiều trong cùng bối cảnh sẽ cần ít ý chí hơn. Vì vậy thay đổi bền vững phụ thuộc vào tín hiệu, môi trường và phần thưởng — không chỉ quyết tâm.",
    guidance: "Thu nhỏ hành vi mới đến mức dễ bắt đầu, gắn nó với tín hiệu rõ ràng và theo dõi điều thật sự củng cố nó.",
    insights: ["Xác định tín hiệu – hành vi – phần thưởng", "Thiết kế môi trường giảm ma sát cho lựa chọn tốt", "Chuẩn bị cách quay lại sau một lần gián đoạn"],
    tags: ["Hành vi", "Khoa học thần kinh"],
    keywords: ["thói quen", "vòng lặp", "hành vi"],
  },
  {
    pillar: "tam",
    slug: "hieu-hanh-vi",
    icon: "🔍",
    label: "Hiểu hành vi",
    title: "Hành vi có chức năng — kể cả khi nó gây hại",
    description: "Trì hoãn, làm hài lòng người khác hay tự phá hoại thường đang giúp bạn tránh một cảm giác, bảo vệ một niềm tin hoặc giữ sự thuộc về.",
    guidance: "Hỏi “hành vi này đang giúp mình tránh hoặc đạt điều gì?” trước khi cố loại bỏ nó.",
    insights: ["Phân tích bối cảnh trước và hậu quả sau hành vi", "Tìm chức năng ẩn thay vì chỉ phán xét kết quả", "Thay bằng hành vi mới đáp ứng cùng nhu cầu lành mạnh hơn"],
    tags: ["Hành vi", "Mô thức", "Sự nghiệp"],
    keywords: ["hành vi", "tự phá hoại", "trì hoãn"],
  },
  {
    pillar: "tam",
    slug: "thuc-hanh",
    icon: "📝",
    label: "Thực hành với Tâm",
    title: "Biến tự nhận thức thành một kỹ năng có thể luyện tập",
    description: "Đọc nhiều về tâm lý không tự động tạo thay đổi. Bạn cần đưa hiểu biết trở lại một tình huống thật, một phản ứng thật và một lựa chọn nhỏ có thể thử ngay.",
    guidance: "Mỗi ngày, ghi lại một tình huống, suy nghĩ tự động, cảm xúc, nhu cầu và phản ứng bạn muốn thử lần sau.",
    insights: ["Dừng lại trước khi giải thích hoặc hành động", "Gọi tên mô thức mà không đồng nhất mình với nó", "Đánh giá tiến bộ bằng khả năng lựa chọn, không bằng sự hoàn hảo"],
    tags: ["Tự nhận thức", "Mô thức", "Hành vi"],
    keywords: ["thực hành", "tự nhận thức", "mô thức"],
    ctaHref: "/kham-pha/ban-do-noi-tam",
    ctaLabel: "Làm bài test Bản Đồ Nội Tâm",
  },

  {
    pillar: "tri",
    slug: "tu-duy-phan-bien",
    icon: "⚖️",
    label: "Tư duy phản biện",
    title: "Tư duy phản biện bắt đầu bằng việc nghi ngờ cách mình đang biết",
    description: "Tư duy phản biện không phải phản đối mọi thứ. Đó là khả năng tách dữ kiện khỏi diễn giải, đánh giá chất lượng bằng chứng và thay đổi kết luận khi có thông tin tốt hơn.",
    guidance: "Trước một khẳng định quan trọng, hãy hỏi: nguồn là gì, bằng chứng nào có thể bác bỏ nó và mình đang bỏ sót cách giải thích nào?",
    insights: ["Phân biệt quan sát, suy luận và ý kiến", "Kiểm tra nguyên nhân thay vì chỉ nhìn tương quan", "Giữ mức độ chắc chắn tương xứng với bằng chứng"],
    tags: ["Phân biệt mô thức", "Tự nhận thức"],
    keywords: ["bằng chứng", "phân biệt", "tư duy"],
  },
  {
    pillar: "tri",
    slug: "thien-kien-nhan-thuc",
    icon: "🧠",
    label: "Thiên kiến nhận thức",
    title: "Não bộ tối ưu cho tốc độ, không phải lúc nào cũng cho sự thật",
    description: "Thiên kiến là lối tắt giúp não xử lý thông tin nhanh. Chúng hữu ích trong nhiều tình huống nhưng có thể làm bạn chỉ thấy bằng chứng phù hợp với điều đã tin.",
    guidance: "Không ai miễn nhiễm với thiên kiến. Cách tốt hơn là thiết kế câu hỏi, quy trình và phản hồi giúp chúng dễ bị phát hiện.",
    insights: ["Nhận diện thiên kiến xác nhận và hiệu ứng hào quang", "Tìm dữ liệu trái với giả thuyết mình ưa thích", "Tách đánh giá con người khỏi đánh giá một hành động"],
    tags: ["Tự nhận thức", "Phân biệt mô thức", "Hành vi"],
    keywords: ["thiên kiến", "nhận thức", "bằng chứng"],
  },
  {
    pillar: "tri",
    slug: "khoa-hoc-con-nguoi",
    icon: "🔬",
    label: "Khoa học về con người",
    title: "Hiểu con người cần nhiều lớp khoa học cùng lúc",
    description: "Hành vi xuất hiện từ tương tác giữa não bộ, cơ thể, lịch sử học tập, quan hệ và văn hóa. Một lời giải thích đơn lẻ hiếm khi đủ cho một con người thật.",
    guidance: "Ưu tiên những giải thích có bằng chứng, thừa nhận giới hạn và tránh biến một nghiên cứu hấp dẫn thành chân lý cho mọi người.",
    insights: ["Kết nối sinh học, tâm lý và môi trường xã hội", "Phân biệt nghiên cứu tương quan với quan hệ nhân quả", "Kiểm tra khả năng áp dụng của bằng chứng vào bối cảnh Việt Nam"],
    tags: ["Khoa học thần kinh", "Hành vi", "Tự nhận thức"],
    keywords: ["não bộ", "khoa học", "hành vi"],
  },
  {
    pillar: "tri",
    slug: "lop-hoc",
    icon: "🎓",
    label: "Lớp học thứ 7",
    title: "Học cách đặt câu hỏi tốt hơn về con người và cuộc sống",
    description: "Lớp học thứ 7 hướng đến việc biến kiến thức thành đối thoại: cùng phân tích một vấn đề, kiểm tra giả định và luyện cách diễn đạt quan điểm rõ ràng.",
    guidance: "Trong khi chờ lịch lớp tiếp theo, bạn có thể bắt đầu bằng thư viện bài viết và ghi lại những câu hỏi muốn mang vào buổi thảo luận.",
    insights: ["Học qua tình huống thay vì ghi nhớ thuật ngữ", "Tranh luận vào ý tưởng mà không công kích con người", "Rời buổi học với một thử nghiệm cụ thể trong đời sống"],
    tags: ["Tự nhận thức", "Hành vi", "Phân biệt mô thức"],
    keywords: ["tư duy", "bằng chứng", "hành vi"],
    ctaHref: "/hoc-cung-aimind",
    ctaLabel: "Xem các chương trình học",
  },
];

export function getPillarTopic(pillar: PillarKey, slug: string[]) {
  const topicSlug = slug.join("/");
  return PILLAR_TOPICS.find(
    (topic) => topic.pillar === pillar && topic.slug === topicSlug,
  );
}

export function getPillarStaticParams(pillar: PillarKey) {
  return PILLAR_TOPICS.filter((topic) => topic.pillar === pillar).map((topic) => ({
    slug: topic.slug.split("/"),
  }));
}

function articleText(article: Article) {
  return [article.title, article.excerpt, article.tag].join(" ").toLocaleLowerCase("vi");
}

export function getTopicArticles(topic: PillarTopic, limit = 6) {
  return articles
    .filter((article) => {
      if (topic.tags.includes(article.tag)) return true;
      const text = articleText(article);
      return topic.keywords.some((keyword) =>
        text.includes(keyword.toLocaleLowerCase("vi")),
      );
    })
    .slice(0, limit);
}

export function getRelatedTopics(topic: PillarTopic, limit = 3) {
  return PILLAR_TOPICS.filter(
    (candidate) =>
      candidate.pillar === topic.pillar && candidate.slug !== topic.slug,
  ).slice(0, limit);
}
