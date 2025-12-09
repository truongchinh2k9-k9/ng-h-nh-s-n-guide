import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { toast } from "sonner";
import contactHero from "@/assets/anhlienhe.jpg";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section
        className="text-primary-foreground py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(2,6,23,0.55), rgba(2,6,23,0.35)), url(${contactHero})`,
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Liên hệ với chúng tôi
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn trong chuyến khám phá Ngũ Hành Sơn
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Thông tin liên hệ</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Hotline hỗ trợ</h3>
                      <p className="text-muted-foreground">0236.3961.114</p>
                      <p className="text-muted-foreground">0905.123.456</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-secondary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">info@nguhanh-son.vn</p>
                      <p className="text-muted-foreground">support@nguhanh-son.vn</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-nature/10 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-nature" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Địa chỉ</h3>
                      <p className="text-muted-foreground">
                        Phường Ngũ Hành Sơn<br />
                        Quận Ngũ Hành Sơn<br />
                        Thành phố Đà Nẵng
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Giờ làm việc</h3>
                      <p className="text-muted-foreground">
                        Thứ 2 - Chủ nhật: 6:00 - 18:00<br />
                        Hỗ trợ trực tuyến 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl">Gửi tin nhắn cho chúng tôi</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Họ và tên *
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Nguyễn Văn A" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="email@example.com" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Số điện thoại
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="0905123456" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Tiêu đề *
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="Câu hỏi về..." 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Nội dung *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Nhập nội dung tin nhắn của bạn..."
                      rows={6}
                      required 
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Gửi tin nhắn
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Vị trí trên bản đồ</h2>
          <Card className="max-w-5xl mx-auto shadow-card overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.8563803935565!2d108.26283731533468!3d16.002131888893904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314219c2f81fa52f%3A0x923a34c135b65a00!2sMarble%20Mountains!5e0!3m2!1sen!2s!4v1234567890123"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vị trí Ngũ Hành Sơn"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
